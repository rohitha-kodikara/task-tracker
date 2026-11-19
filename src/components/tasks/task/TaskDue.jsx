import { Calendar } from "lucide-react";

const TaskDue = ({ task }) => {
  return (
    <span
      className={`flex items-center gap-1 font-medium ${task.overdue ? "text-rose-600" : "text-slate-700"}`}
    >
      <Calendar className="h-3 w-3" />
      {task.due} {task.createdAt}
    </span>
  );
};

export default TaskDue;
