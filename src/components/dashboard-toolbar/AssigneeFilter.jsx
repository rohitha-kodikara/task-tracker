import React from "react";

const AssigneeFilter = ({ value, updateSearchParams }) => {
  return (
    <select
      value={value}
      onChange={(e) => updateSearchParams({ assignee: e.target.value })}
      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
    >
      <option value="All">All assignees</option>
      <option value="Nimal">Nimal</option>
      <option value="Kasun">Kasun</option>
      <option value="SANDUNI">Sanduni</option>
      <option value="Dilini">Dilini</option>
    </select>
  );
};

export default AssigneeFilter;
