import { TaskProvider } from "../taskcontext/TaskProvider";
import TaskModalDialog from "./TaskModalDialog";

const TaskModal = ({ mode, className, bgColor, task }) => {
  return (
    <TaskProvider task={task} mode={mode}>
      <TaskModalDialog className={className} bgColor={bgColor} />
    </TaskProvider>
  );
};

export default TaskModal;
