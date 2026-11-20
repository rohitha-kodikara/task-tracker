import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import useTasks from "../taskcontext/useTasks";
import StatusOptions from "../shared/StatusOptions";
import PriorityOptions from "../shared/PriorityOptions";
import { X } from "lucide-react";

const field =
  "w-full  border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

const TaskModalContent = () => {
  const {
    formData,
    setFormData,
    taskErrors,
    handleTaskSubmit,
    clearError,
    isEdit,
  } = useTasks();

  return (
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
              value={formData.title}
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
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
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
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
                value={formData.assignee}
                onChange={(e) => {
                  setFormData({ ...formData, assignee: e.target.value });
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
                value={formData.dueDate}
                onChange={(e) => {
                  setFormData({ ...formData, dueDate: e.target.value });
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
                value={formData.status}
                onChange={(e) => {
                  setFormData({ ...formData, status: e.target.value });
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
                value={formData.priority}
                onChange={(e) => {
                  setFormData({ ...formData, priority: e.target.value });
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
              value={formData.tags}
              onChange={(e) => {
                setFormData({ ...formData, tags: e.target.value });
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
  );
};

export default TaskModalContent;
