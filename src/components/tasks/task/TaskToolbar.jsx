import TaskArchive from "@/components/shared/TaskArchive";
import TaskDelete from "@/components/shared/TaskDelete";
import TaskStarred from "@/components/shared/TaskStarred";
import { Copy, Pencil } from "lucide-react";

const TaskToolbar = ({ task }) => {
  return (
    <div className="flex shrink-0 items-center gap-1 text-slate-700">
      <TaskStarred variant="icon" starred={task.starred} />
      <button
        type="button"
        aria-label="Edit task"
        className="rounded-lg border border-slate-300/70 bg-white/85 p-1.5 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 active:translate-y-px"
      >
        <Pencil className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Duplicate task"
        className="rounded-lg border border-slate-300/70 bg-white/85 p-1.5 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 active:translate-y-px"
      >
        <Copy className="h-4 w-4" />
      </button>
      <TaskArchive className=" border border-slate-300/70 bg-white/85 p-1.5 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 active:translate-y-px" />
      <TaskDelete className="border border-slate-300/70 bg-white/85 p-1.5 shadow-sm hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700 active:translate-y-px" />
    </div>
  );
};

export default TaskToolbar;
