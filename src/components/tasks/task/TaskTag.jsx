const TaskTag = ({ tag }) => {
  return (
    <span
      key={tag}
      className="rounded-full border border-violet-200 bg-violet-50 px-2 py-1 font-medium text-violet-700"
    >
      #{tag}
    </span>
  );
};

export default TaskTag;
