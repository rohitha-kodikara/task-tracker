import TaskSearch from "./TaskSearch";
import AssigneeFilter from "./AssigneeFilter";
import TaskSorter from "./TaskSorter";

import TaskStarred from "../shared/TaskStarred";
import Reset from "./Reset";
import StatusOptions from "../shared/StatusOptions";
import TaskArchive from "../shared/TaskArchive";
import PriorityOptions from "../shared/PriorityOptions";

const TaskTrackerToolbar = ({ searchTask, updateSearchParams, assignee }) => {
  return (
    <div className="glass space-y-4 rounded-2xl bg-gradient-to-br from-white/60 via-white/45 to-slate-100/40 p-4">
      <div className="flex flex-col gap-3 md:flex-row">
        <TaskSearch
          value={searchTask}
          updateSearchParams={updateSearchParams}
        />
        <AssigneeFilter
          assignee={assignee}
          updateSearchParams={updateSearchParams}
        />
        <TaskSorter />
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
        <div className="relative flex flex-wrap items-center gap-2 rounded-xl border border-slate-300 px-1 pb-1 pt-3">
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-sm bg-white/80 px-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Status
          </span>
          <StatusOptions variant="chips" />
        </div>
        <div className="relative flex flex-wrap items-center gap-2 rounded-xl border border-slate-300 px-1 pb-1 pt-3">
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-sm bg-white/80 px-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Priority
          </span>
          <PriorityOptions
            variant="chips"
            className="rounded-lg border border-slate-300 bg-white/60 p-1"
          />
        </div>
        <div className="relative flex flex-wrap items-center gap-2 rounded-xl border border-slate-300 px-1 pb-1 pt-3">
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-sm bg-white/80 px-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Organize
          </span>
          <TaskStarred
            variant="pill"
            label="Starred"
            // onClick={() => setFilter("starred")}
          />
          <TaskArchive className="flex items-center gap-1 rounded-xl bg-white border-blue-800 border-1 text-blue-900 px-3 py-1 hover:bg-white/25 ">
            Archive
          </TaskArchive>
        </div>
        <Reset />
      </div>
    </div>
  );
};

export default TaskTrackerToolbar;
