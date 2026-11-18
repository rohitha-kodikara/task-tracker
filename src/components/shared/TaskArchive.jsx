import { Archive } from "lucide-react";

const TaskArchive = ({ children, className }) => {
  return (
    <button className={`rounded-lg transition ${className}`}>
      <Archive className="h-4 w-4" />
      {children}
    </button>
  );
};

export default TaskArchive;
