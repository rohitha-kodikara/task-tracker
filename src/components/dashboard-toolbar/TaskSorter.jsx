import { taskSortOptions } from "../../data/data";

const TaskSorter = ({ taskSort, updateSearchParams }) => {
  return (
    <>
      <select
        value={taskSort}
        onChange={(e) => updateSearchParams("sort", e.target.value)}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
      >
        {taskSortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            Sort: {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default TaskSorter;
