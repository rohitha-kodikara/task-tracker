import TaskSearch from "./TaskSearch";
import AssigneeFilter from "./AssigneeFilter";
import TaskSorter from "./TaskSorter";

import TaskStarred from "../shared/TaskStarred";
import Reset from "./Reset";
import StatusOptions from "../shared/StatusOptions";
import TaskArchive from "../shared/TaskArchive";
import PriorityOptions from "../shared/PriorityOptions";

const TaskTrackerToolbar = () => {
  return (
    <div className="glass space-y-4 rounded-2xl bg-gradient-to-br from-white/60 via-white/45 to-slate-100/40 p-4">
      <div className="flex flex-col gap-3 md:flex-row">
        <TaskSearch />
        <AssigneeFilter />
        <TaskSorter />
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
        <StatusOptions variant="chips" />
        <span className="h-4 w-px bg-slate-200" />
        <PriorityOptions variant="chips" />
        <span className="h-4 w-px bg-slate-200" />
        <TaskStarred
          variant="pill"
          label="Starred"
          // onClick={() => setFilter("starred")}
        />
        <TaskArchive className="flex items-center gap-1 rounded-xl bg-white border-blue-800 border-1 text-blue-900 px-3 py-1 hover:bg-white/25 ">
          Archive
        </TaskArchive>
        <Reset />
      </div>
    </div>
  );
};

export default TaskTrackerToolbar;
