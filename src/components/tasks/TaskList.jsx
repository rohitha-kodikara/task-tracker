import Task from "./task/Task";

const TaskList = ({ tasks }) => {
  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <div className="glass flex h-24 items-center justify-center rounded-2xl bg-gradient-to-br from-white/60 via-white/45 to-slate-100/40 p-4 text-center text-sm font-medium text-slate-600">
          No tasks found.
        </div>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`glass glass-hover bg-mauve-200/50 flex gap-3 rounded-2xl bg-gradient-to-br p-4 ${task.card} ${task.completed ? "opacity-90" : ""}`}
          >
            <Task key={task.id} task={task} />
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
