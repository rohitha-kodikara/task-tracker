import { X } from "lucide-react";
const IndividualSubTask = ({ s }) => {
  return (
    <div
      key={s.title}
      className="flex items-center gap-2 text-sm text-slate-800"
    >
      <input
        type="checkbox"
        defaultChecked={s.done}
        className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
      />
      <span className={`flex-1 ${s.done ? "text-slate-600 line-through" : ""}`}>
        {s.title}
      </span>
      <button
        type="button"
        aria-label="Remove subtask"
        className="rounded-md border border-slate-300/70 bg-white/85 p-1 text-slate-600 shadow-sm transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default IndividualSubTask;
