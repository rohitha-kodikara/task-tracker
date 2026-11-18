import { tasks } from "../../data/data";
import Task from "./task/Task";

const TaskList = () => {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`glass glass-hover flex gap-3 rounded-2xl bg-gradient-to-br p-4 ${task.card} ${task.completed ? "opacity-80" : ""}`}
        >
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
