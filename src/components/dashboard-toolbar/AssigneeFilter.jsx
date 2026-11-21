const AssigneeFilter = ({ assignee, updateSearchParams }) => {
  return (
    <select
      value={assignee}
      onChange={(e) => updateSearchParams("assignee", e.target.value)}
      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
    >
      <option value="all">All assignees</option>
      <option value="nimal">Nimal</option>
      <option value="kasun">Kasun</option>
      <option value="sanduni">Sanduni</option>
      <option value="dilini">Dilini</option>
    </select>
  );
};

export default AssigneeFilter;
