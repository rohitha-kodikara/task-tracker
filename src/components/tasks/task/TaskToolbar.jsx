import TaskArchive from "@/components/shared/TaskArchive";
import TaskDeleteDialog from "@/components/shared/TaskDeleteDialog";
import TaskStarred from "@/components/shared/TaskStarred";
import TaskModal from "../../task-modal/TaskModal";

import { useDispatch } from "react-redux";
import { deleteTask } from "@/features/tasks/TaskSlice";

const TaskToolbar = ({ task, handleStarredClick, handleArchivedClick }) => {
  const dispatch = useDispatch();

  function RemoveTask(taskId) {
    dispatch(deleteTask({ taskId }));
  }

  return (
    <div className="flex shrink-0 items-center gap-1 text-slate-700">
      <TaskStarred
        onClick={() => handleStarredClick(task.id)}
        variant="icon"
        starred={task.starred}
      />

      <TaskModal
        mode="edit"
        task={task}
        className="px-1.5 py-1"
        bgColor="border-slate-300/70 bg-white/85 "
      />

      <TaskArchive
        onClick={() => handleArchivedClick(task.id)}
        archived={task.archived}
        className=" border rounded-lg border-slate-300/70 bg-white/85 p-1.5 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 active:translate-y-px"
      />

      <TaskDeleteDialog
        onConfirm={() => RemoveTask(task.id)}
        className="border border-slate-300/70 bg-white/85 p-1.5 shadow-sm transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700 active:translate-y-px"
      />
    </div>
  );
};

export default TaskToolbar;
