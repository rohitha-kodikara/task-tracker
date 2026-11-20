import { addTask, updateTask } from "@/features/tasks/TaskSlice";
import { createContext, useState } from "react";
import { useDispatch } from "react-redux";

const TaskContext = createContext();

const TaskProvider = ({ children, task, mode }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignee: "",
    dueDate: "",
    status: "In Progress",
    priority: "Medium",
    tags: "",
  });

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
    if (!formData.title.trim()) {
      errors.title = "Title is required";
    }
    if (!formData.description.trim()) {
      errors.description = "Description is required";
    }
    if (!formData.assignee.trim()) {
      errors.assignee = "Assignee is required";
    }
    if (!formData.dueDate.trim()) {
      errors.dueDate = "Due date is required";
    }
    if (!formData.status.trim()) {
      errors.status = "Status is required";
    }
    if (!formData.priority.trim()) {
      errors.priority = "Priority is required";
    }
    if (!formData.tags.length) {
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
      setFormData({
        title: task.title ?? "",
        description: task.description ?? "",
        assignee: task.assignee ?? "",
        dueDate: task.dueDate ?? "",
        status: task.status ?? "In Progress",
        priority: task.priority ?? "Medium",
        tags: task.tags?.join(", ") ?? "",
      });
    } else {
      setFormData({
        title: "",
        description: "",
        assignee: "",
        dueDate: "",
        status: "To Do",
        priority: "Medium",
        tags: "",
      });
    }
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
      title: formData.title,
      description: formData.description,
      assignee: formData.assignee,
      dueDate: formData.dueDate,
      status: formData.status,
      priority: formData.priority,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };
    if (isEdit) {
      dispatch(updateTask({ id: task.id, ...newTask }));
    } else {
      dispatch(addTask(newTask));
    }
    setOpen(false);
  }

  return (
    <TaskContext.Provider
      value={{
        formData,
        handleOpenChange,
        handleTaskSubmit,
        clearError,
        isEdit,
        taskErrors,
        setFormData,
        open,
        setOpen,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };
