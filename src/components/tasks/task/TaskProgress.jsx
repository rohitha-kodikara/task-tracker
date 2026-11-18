import { ChevronDown } from "lucide-react";

const TaskProgress = ({ task }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-2.5 flex-1 overflow-hidden rounded-full ${task.bar}`}>
        <div
          className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
          style={{
            width: task.total ? `${(task.done / task.total) * 100}%` : "0%",
          }}
        />
      </div>
    </div>
  );
};

export default TaskProgress;
