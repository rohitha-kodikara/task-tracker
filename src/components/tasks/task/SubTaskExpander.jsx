import { ChevronDown } from "lucide-react";

const SubTaskExpander = ({ task, handleSubtasksExpanderClick }) => {
  return (
    <button
      type="button"
      className="flex items-center gap-1 rounded-lg border border-slate-300/70 bg-white/80 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-indigo-300 hover:bg-white hover:text-indigo-700"
      onClick={() => handleSubtasksExpanderClick(task.id)}
    >
      {task.done}/{task.total} subtasks
      <ChevronDown className="h-3.5 w-3.5" />
    </button>
  );
};

export default SubTaskExpander;
