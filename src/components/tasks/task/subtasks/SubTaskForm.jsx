import { Plus } from "lucide-react";

const SubTaskForm = () => {
  return (
    <form>
      <div className="flex gap-2">
        <input
          placeholder="Add subtask…"
          className="flex-1 rounded-lg border border-white/60 bg-white/80 px-3 py-1.5 text-sm text-slate-900 placeholder:text-slate-500 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        />
        <button className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white transition hover:bg-indigo-700">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

export default SubTaskForm;
