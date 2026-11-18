import React from "react";

const AssigneeFilter = () => {
  return (
    <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
      <option>All assignees</option>
      <option>Nimal</option>
      <option>Kasun</option>
      <option>Sanduni</option>
      <option>Dilini</option>
    </select>
  );
};

export default AssigneeFilter;
