import { ChevronDown } from "lucide-react";

const TaskProgress = ({ task }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-1.5 flex-1 overflow-hidden rounded-full ${task.bar}`}>
        <div
          className="h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
          style={{
            width: task.total ? `${(task.done / task.total) * 100}%` : "0%",
          }}
        />
      </div>
      <button
        type="button"
        className="flex items-center gap-1 rounded-lg border border-slate-300/70 bg-white/80 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-indigo-300 hover:bg-white hover:text-indigo-700"
      >
        {task.done}/{task.total} subtasks
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default TaskProgress;
