import { Calendar, Clock } from "lucide-react";

const TaskDue = ({ task }) => {
  return (
    <span
      className={`flex flex-col gap-1 font-medium text-black ${task.overdue ? "text-rose-600" : "text-slate-700"}`}
    >
      <span className="flex items-center gap-1">
        <Calendar className="h-3 w-3 text-black" />
        <span className="text-black">Due Date:{task.dueDate}</span>
        {/* if the daysUntilDue count is negative,overdue value will true and therefore this will be Overdue*/}
        {task.overdue && (
          <span className="text-xs text-rose-600">(Overdue)</span>
        )}
      </span>
      <span className="flex items-center gap-1">
        <Clock
          className={`h-3 w-3 ${task.daysUntilDue > 0 ? "text-black" : "text-rose-600"}`}
        />
        <span
          className={task.daysUntilDue > 0 ? "text-black" : "text-rose-600"}
        >
          {task.daysUntilDue > 0
            ? `You have ${task.daysUntilDue} days to complete this task.`
            : `This task is overdue.`}{" "}
        </span>
      </span>
    </span>
  );
};

export default TaskDue;
