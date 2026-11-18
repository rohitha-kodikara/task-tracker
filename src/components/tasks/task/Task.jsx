import { User } from "lucide-react";
import TaskDescription from "./TaskDescription";
import TaskToolbar from "./TaskToolbar";
import StatusOption from "../../shared/StatusOptions";
import PriorityOptions from "@/components/shared/PriorityOptions";
import TaskDue from "./TaskDue";
import TaskTag from "./TaskTag";
import TaskProgress from "./TaskProgress";
import SubTasks from "./subtasks/SubTasks";

const Task = ({ task }) => {
  return (
    <>
      <input
        type="checkbox"
        defaultChecked={task.selected}
        className="mt-1.5 h-4 w-4 rounded border-slate-300 accent-indigo-600"
      />

      <div className="min-w-0 flex-1 space-y-2.5">
        <div className="flex items-start justify-between gap-2">
          <TaskDescription task={task} />
          <TaskToolbar task={task} />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <StatusOption
            variant="dropdown"
            defaultValue={task.status || "In Progress"}
          />

          <PriorityOptions variant="dropdown" defaultValue={task.priority} />
          <span className="flex items-center gap-1 font-medium text-slate-700">
            <User className="h-3 w-3" />
            {task.assignee}
          </span>
          {task.due && <TaskDue task={task} />}
          {task.tags.map((tag) => (
            <TaskTag key={tag} tag={tag} />
          ))}
        </div>

        <TaskProgress task={task} />

        {/* Expanded subtask panel design (show it when a row is expanded) */}
        <SubTasks task={task} />
      </div>
    </>
  );
};

export default Task;
