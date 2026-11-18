import { Trash2 } from "lucide-react";

const TaskDelete = ({ children, className }) => {
  return (
    <button
      className={`rounded-lg
transition ${className}`}
    >
      <Trash2 className="h-4 w-4" />
      {children}
    </button>
  );
};

export default TaskDelete;
