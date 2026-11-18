const TaskDescription = ({ task }) => {
  return (
    <div className="min-w-0">
      <h3
        className={`font-semibold ${task.completed ? "text-slate-600 line-through" : "text-slate-900"}`}
      >
        {task.title}
      </h3>
      <p className="truncate text-sm text-slate-700">{task.description}</p>
    </div>
  );
};

export default TaskDescription;
