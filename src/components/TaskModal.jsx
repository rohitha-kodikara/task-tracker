import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import StatusOptions from "./shared/StatusOptions";
import { useState } from "react";
import PriorityOptions from "./shared/PriorityOptions";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "@/features/bulk-tasks/BulkTaskSlice";

const field =
  "w-full  border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

const TaskModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Medium");
  const [tags, setTags] = useState("");

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
  // const tasks = useSelector((state) => state.bulkTasks.tasks);

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

    dispatch(addTask(newTask));

    setOpen(false);
    setTitle("");
    setDescription("");
    setAssignee("");
    setDueDate("");
    setStatus("To Do");
    setPriority("Medium");
    setTags("");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="rounded-lg bg-gradient-to-r from-indigo-700 to-fuchsia-700 px-4 py-2 font-medium text-white shadow hover:text-white"
          >
            Add Task
          </Button>
        }
      />
      <DialogContent
        showCloseButton={false}
        className="glass gap-0 rounded-2xl bg-white/55 bg-gradient-to-br from-white/60 via-white/35 to-indigo-50/45 p-0 ring-1 ring-white/40 sm:max-w-lg"
      >
        <form onSubmit={handleTaskSubmit}>
          <div className="flex items-center justify-between bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-white">
            <DialogTitle className="font-semibold text-white">
              New Task
            </DialogTitle>
            <DialogDescription className="sr-only">
              Create a new task
            </DialogDescription>
            <DialogClose
              render={
                <button
                  type="button"
                  aria-label="Close"
                  className="rounded-lg p-1 transition hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
              }
            />
          </div>

          <div className="space-y-3 p-5">
            <div>
              <input
                className={`${field} rounded-lg`}
                placeholder="Title *"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  clearError("title");
                }}
              />
              {taskErrors.title && (
                <span className="mt-0.5 block text-xs text-red-500">
                  {taskErrors.title}
                </span>
              )}
            </div>
            <div>
              <textarea
                className={`rounded-lg ${field}`}
                rows={3}
                placeholder="Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  clearError("description");
                }}
              />
              {taskErrors.description && (
                <span className="mt-0.5 block text-xs text-red-500">
                  {taskErrors.description}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <select
                  className={`${field} rounded-lg`}
                  value={assignee}
                  onChange={(e) => {
                    setAssignee(e.target.value);
                    clearError("assignee");
                  }}
                >
                  <option value="">Select an Assignee</option>
                  <option>Kasun</option>
                  <option>Sanduni</option>
                  <option>Dilini</option>
                </select>
                {taskErrors.assignee && (
                  <span className="mt-0.5 block text-xs text-red-500">
                    {taskErrors.assignee}
                  </span>
                )}
              </div>
              <div>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => {
                    setDueDate(e.target.value);
                    clearError("dueDate");
                  }}
                  className={`${field} rounded-lg`}
                />
                {taskErrors.dueDate && (
                  <span className="mt-0.5 block text-xs text-red-500">
                    {taskErrors.dueDate}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <StatusOptions
                  className={`rounded-lg ${field}`}
                  variant="dropdown"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                    clearError("status");
                  }}
                />
                {taskErrors.status && (
                  <span className="mt-0.5 block text-xs text-red-500">
                    {taskErrors.status}
                  </span>
                )}
              </div>
              {/* <select className={field}>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Review</option>
                <option>Done</option>
              </select> */}
              {/* <select className={field}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select> */}
              <div>
                <PriorityOptions
                  variant="dropdown"
                  className={`rounded-lg py-2 ${field}`}
                  value={priority}
                  onChange={(e) => {
                    setPriority(e.target.value);
                    clearError("priority");
                  }}
                />
                {taskErrors.priority && (
                  <span className="mt-0.5 block text-xs text-red-500">
                    {taskErrors.priority}
                  </span>
                )}
              </div>
            </div>
            <div>
              <input
                value={tags}
                onChange={(e) => {
                  setTags(e.target.value);
                  clearError("tags");
                }}
                className={`rounded-lg ${field}`}
                placeholder="Tags (comma separated)"
              />
              {taskErrors.tags && (
                <span className="mt-0.5 block text-xs text-red-500">
                  {taskErrors.tags}
                </span>
              )}
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <DialogClose
                render={
                  <button
                    type="submit"
                    className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                }
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm text-white shadow-sm transition hover:opacity-90"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
