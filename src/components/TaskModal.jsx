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

const field =
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20";

const TaskModal = () => {
  return (
    <Dialog>
      <form>
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
            <input className={field} placeholder="Title *" />
            <textarea className={field} rows={3} placeholder="Description" />
            <div className="grid grid-cols-2 gap-3">
              <select className={field}>
                <option>Nimal</option>
                <option>Kasun</option>
                <option>Sanduni</option>
                <option>Dilini</option>
              </select>
              <input type="date" className={field} />
              <select className={field}>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Review</option>
                <option>Done</option>
              </select>
              <select className={field}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>
            <input className={field} placeholder="Tags (comma separated)" />
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
                Save
              </button>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default TaskModal;
