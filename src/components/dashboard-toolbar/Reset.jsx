import { RotateCcw } from "lucide-react";

const Reset = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="ml-auto flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white/80 px-3.5 py-1.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-300 hover:bg-white hover:text-indigo-700 active:translate-y-px"
    >
      <RotateCcw className="h-4 w-4" />
      Reset
    </button>
  );
};

export default Reset;
