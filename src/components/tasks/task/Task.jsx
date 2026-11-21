import { User } from "lucide-react";
import TaskDescription from "./TaskDescription";
import TaskToolbar from "./TaskToolbar";
import StatusOption from "../../shared/StatusOptions";
import PriorityOptions from "@/components/shared/PriorityOptions";
import TaskDue from "./TaskDue";
import TaskTag from "./TaskTag";
import TaskProgress from "./TaskProgress";
import SubTasks from "./subtasks/SubTasks";
import { useState } from "react";
import SubTaskExpander from "./SubTaskExpander";

import { useDispatch } from "react-redux";
import {
  insertTaskAsArchived,
  insertTaskAsStarred,
  updateTaskPriority,
  updateTaskStatus,
} from "@/features/tasks/TaskSlice";

const Task = ({ task }) => {
  const [subTasksOpen, setSubTasksOpen] = useState(false);

  const dispatch = useDispatch();
  function handleSubtasksExpanderClick(taskId) {
    const isIdMatch = task.id === taskId;
    if (isIdMatch) {
      setSubTasksOpen((prev) => !prev);
    }
  }

  // Toggle task as starred
  function handleStarredClick(taskId) {
    dispatch(insertTaskAsStarred({ taskId }));
  }

  // Toggle task as archived
  function handleArchivedClick(taskId) {
    dispatch(insertTaskAsArchived({ taskId }));
  }

  return (
    <>
      <input
        type="checkbox"
        defaultChecked={task.selected}
        className="mt-1.5 h-4 w-4 rounded border-slate-300 accent-indigo-600"
      />

      <div className="min-w-0 flex-1 space-y-2.5">
        <div className="flex items-start justify-between gap-2">
          <TaskDescription task={task} />
          <TaskToolbar
            task={task}
            handleStarredClick={handleStarredClick}
            handleArchivedClick={handleArchivedClick}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <StatusOption
            value={task.status}
            onChange={(e) => {
              dispatch(
                updateTaskStatus({
                  id: task.id,
                  status: e.target.value,
                }),
              );
            }}
            variant="dropdown"
            className="rounded-xl"
            task={task}
          />

          <PriorityOptions
            value={task.priority}
            onChange={(e) => {
              dispatch(
                updateTaskPriority({
                  id: task.id,
                  priority: e.target.value,
                }),
              );
            }}
            variant="dropdown"
            className="rounded-xl"
          />
          <span className="flex items-center gap-1 font-medium text-slate-700">
            <User className="h-3 w-3" />
            {task.assignee}
          </span>
          {task.dueDate && <TaskDue task={task} />}
          {task.tags.map((tag) => (
            <TaskTag key={tag} tag={tag} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="min-w-0 flex-1">
            <TaskProgress task={task} />
          </div>
          <div className="shrink-0">
            <SubTaskExpander
              handleSubtasksExpanderClick={handleSubtasksExpanderClick}
              task={task}
            />
          </div>
        </div>

        {/* Expanded subtask panel design (show it when a row is expanded) */}
        {/* {subTasksOpen && <SubTasks task={task} />} */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${subTasksOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="min-h-0 overflow-hidden">
            <SubTasks task={task} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
