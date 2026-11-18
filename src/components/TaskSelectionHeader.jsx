const TaskSelectionHeader = ({ tasks }) => {
  return (
    <div className="flex items-center justify-between px-1">
      <label className="flex items-center gap-2 text-xs font-medium text-slate-300">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
        />
        Select all ({tasks.length})
      </label>
      <span className="text-xs text-slate-400">{tasks.length} tasks</span>
    </div>
  );
};

export default TaskSelectionHeader;
