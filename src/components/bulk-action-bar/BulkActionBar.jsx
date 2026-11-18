import { X } from "lucide-react";
import StatusOptions from "../shared/StatusOptions";
import TaskArchive from "../shared/TaskArchive";
import TaskDelete from "../shared/TaskDelete";

const BulkActionBar = () => {
  return (
    <div className="glass flex flex-wrap items-center justify-between gap-2 rounded-xl bg-gradient-to-r bg-blue-900 px-4 py-2.5 text-sm text-white">
      <span className="font-medium">1 selected</span>
      <div className="flex items-center gap-2">
        <StatusOptions
          variant="dropdown"
          feature="bulk-action-bar"
          defaultValue=""
        />
        <TaskArchive className="flex items-center gap-1 rounded-lg bg-white/15 px-3 py-1 hover:bg-white/25 ">
          Archive
        </TaskArchive>
        <TaskDelete className="flex items-center gap-1 bg-rose-500 px-3 py-1 hover:bg-rose-600">
          Delete
        </TaskDelete>
        <button className="rounded-lg p-1 transition hover:bg-white/20">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default BulkActionBar;
