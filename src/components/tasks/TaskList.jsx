import Task from "./task/Task";

const TaskList = ({ tasks }) => {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`glass glass-hover bg-mauve-200/50 flex gap-3 rounded-2xl bg-gradient-to-br p-4 ${task.card} ${task.completed ? "opacity-90" : ""}`}
        >
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
