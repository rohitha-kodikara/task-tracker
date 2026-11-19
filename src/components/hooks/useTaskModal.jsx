import { addTask, updateTask } from "@/features/tasks/TaskSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const useTaskModal = ({ task, mode }) => {
  const [title, setTitle] = useState(task?.title ?? "");
  const [description, setDescription] = useState(task?.description ?? "");
  const [assignee, setAssignee] = useState(task?.assignee ?? "");
  const [dueDate, setDueDate] = useState(task?.dueDate ?? "");
  const [status, setStatus] = useState(task?.status ?? "In Progress");
  const [priority, setPriority] = useState(task?.priority ?? "Medium");
  const [tags, setTags] = useState(task?.tags?.join(", ") ?? "");

  //controll dialog box state
  const [open, setOpen] = useState(false);

  //to display validation errors
  const [taskErrors, setTaskErrors] = useState({
    title: "",
    description: "",
    assignee: "",
    dueDate: "",
    status: "",
    priority: "",
    tags: "",
  });

  const dispatch = useDispatch();

  // Validation function
  function validateTaskForm() {
    let errors = {};
    if (!title.trim()) {
      errors.title = "Title is required";
    }
    if (!description.trim()) {
      errors.description = "Description is required";
    }
    if (!assignee.trim()) {
      errors.assignee = "Assignee is required";
    }
    if (!dueDate.trim()) {
      errors.dueDate = "Due date is required";
    }
    if (!status.trim()) {
      errors.status = "Status is required";
    }
    if (!priority.trim()) {
      errors.priority = "Priority is required";
    }
    if (!tags.length) {
      errors.tags = "At least one tag is required";
    }

    setTaskErrors(errors);
    return Object.keys(errors).length === 0;
  }

  //Clear error fields when user starts typing
  function clearError(field) {
    setTaskErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));
  }

  const isEdit = mode === "edit";

  //===============================
  // Reload the form with the selected task whenever the edit dialog opens,
  // preventing stale values or previously cancelled edits from appearing.
  function resetFormFromTask() {
    if (isEdit && task) {
      setTitle(task.title ?? "");
      setDescription(task.description ?? "");
      setAssignee(task.assignee ?? "");
      setDueDate(task.dueDate ?? "");
      setStatus(task.status ?? "In Progress");
      setPriority(task.priority ?? "Medium");
      setTags(task.tags?.join(", ") ?? "");
    } else {
      setTitle("");
      setDescription("");
      setAssignee("");
      setDueDate("");
      setStatus("To Do");
      setPriority("Medium");
      setTags("");
    }

    setTaskErrors({
      title: "",
      description: "",
      assignee: "",
      dueDate: "",
      status: "",
      priority: "",
      tags: "",
    });
  }

  function handleOpenChange(nextOpen) {
    if (nextOpen) {
      resetFormFromTask();
    }
    setOpen(nextOpen);
  }

  function handleTaskSubmit(e) {
    e.preventDefault();
    if (!validateTaskForm()) {
      setOpen(true);
      return;
    }
    // Handle form submission logic here
    const newTask = {
      title,
      description,
      assignee,
      dueDate,
      status,
      priority,
      tags: tags.split(",").map((tag) => tag.trim()),
    };
    if (isEdit) {
      dispatch(updateTask({ id: task.id, ...newTask }));
    } else {
      dispatch(addTask(newTask));
    }

    setOpen(false);
  }

  return {
    open,
    handleOpenChange,
    title,
    setTitle,
    description,
    setDescription,
    assignee,
    setAssignee,
    dueDate,
    setDueDate,
    status,
    setStatus,
    priority,
    setPriority,
    tags,
    setTags,
    taskErrors,
    handleTaskSubmit,
    clearError,
    isEdit,
  };
};

export default useTaskModal;
