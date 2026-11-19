import { Pencil, X } from "lucide-react";
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
import PriorityOptions from "./shared/PriorityOptions";
import useTaskModal from "./hooks/useTaskModal";

const field =
  "w-full  border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

const TaskModal = ({ mode, className, bgColor, task }) => {
  const {
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
  } = useTaskModal({ mode, task });

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className={`rounded-lg bg-gradient-to-r ${bgColor}  font-medium text-white shadow hover:text-white ${className}`}
          >
            {isEdit ? <Pencil className="h-4 w-4 text-gray-700" /> : "Add Task"}
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
              {isEdit ? "Edit Task" : "Create Task"}
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
                    type="button"
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
                {isEdit ? "Update Task" : "Add Task"}
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
