import { Search } from "lucide-react";

const TaskSearch = ({ value, updateSearchParams }) => {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
      <input
        value={value}
        onChange={(e) => updateSearchParams("search", e.target.value)}
        placeholder="Search title, description or tag..."
        className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-500 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
      />
    </div>
  );
};

export default TaskSearch;
