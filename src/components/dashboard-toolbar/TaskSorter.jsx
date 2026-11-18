import { ArrowUpDown } from "lucide-react";
import React from "react";

const TaskSorter = () => {
  return (
    <>
      <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
        <option>Sort: Last updated</option>
        <option>Sort: Due date</option>
        <option>Sort: Priority</option>
        <option>Sort: Title</option>
      </select>
      <button className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
        <ArrowUpDown className="h-4 w-4" />
        DESC
      </button>
    </>
  );
};

export default TaskSorter;
