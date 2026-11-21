import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import calculateDueDateFields from "../../helpers/calculateDueDateFields";

const initialState = {
  tasks: [],
  starredTasks: [],
  archivedTasks: [],
  deletedTasks: [],
  tags: [],
};

const bulkTaskSlice = createSlice({
  name: "bulkTasks",
  initialState,
  reducers: {
    //add a task
    addTask: {
      prepare(formData) {
        const dueDateFields = calculateDueDateFields(formData.dueDate);

        return {
          payload: {
            id: nanoid(),
            done: false,
            total: 0,
            completed: 0,
            status: formData.status ?? "To Do",
            ...dueDateFields,
            dueDate: formData.dueDate || null,
            starred: false,
            archived: false,
            selected: false,
            subtasks: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            ...formData,
          },
        };
      },
      // runs second: puts the object into the array
      reducer(state, { payload }) {
        state.tasks.unshift(payload); // newest first
      },
    },
    //update a task
    updateTask(state, { payload }) {
      const { id, dueDate, ...changes } = payload;
      const task = state.tasks.find((item) => item.id === id);

      if (!task) {
        return;
      }

      Object.assign(task, changes);

      if (dueDate) {
        const dueDateFields = calculateDueDateFields(dueDate);

        task.dueDate = dueDate;
        task.daysUntilDue = dueDateFields.daysUntilDue;
        task.overdue = dueDateFields.overdue;
      } else {
        task.dueDate = null;
        task.daysUntilDue = null;
        task.overdue = false;
      }

      task.updatedAt = new Date().toISOString();
    },

    //update task status
    updateTaskStatus(state, { payload }) {
      const { id, status } = payload;
      const task = state.tasks.find((item) => item.id === id);

      if (!task) {
        return;
      }

      task.status = status;
      task.updatedAt = new Date().toISOString();
    },
    //update task priority
    updateTaskPriority(state, { payload }) {
      const { id, priority } = payload;
      const task = state.tasks.find((item) => item.id === id);

      if (!task) {
        return;
      }

      task.priority = priority;
      task.updatedAt = new Date().toISOString();
    },

    //insert taskId into starred array
    insertTaskAsStarred(state, { payload }) {
      const { taskId } = payload;
      const task = state.tasks.find((item) => item.id === taskId);

      if (!task) {
        return;
      }

      task.starred = !task.starred;
      task.updatedAt = new Date().toISOString();

      if (task.starred) {
        if (!state.starredTasks.includes(taskId)) {
          state.starredTasks.push(taskId);
        }
      } else {
        state.starredTasks = state.starredTasks.filter((id) => id !== taskId);
      }
    },

    //insert taskIds into Archived array. that means hide the specified tasks from the main list.
    insertTaskAsArchived(state, { payload }) {
      const { taskId } = payload;
      const targetTask = state.tasks.find((item) => item.id === taskId);

      if (!targetTask) {
        return;
      }

      targetTask.archived = !targetTask.archived;
      targetTask.updatedAt = new Date().toISOString();

      if (targetTask.archived) {
        if (!state.archivedTasks.includes(taskId)) {
          state.archivedTasks.push(taskId);
        }
      } else {
        state.archivedTasks = state.archivedTasks.filter((id) => id !== taskId);
      }
    },
    //Delete Task
    deleteTask(state, { payload }) {
      const { taskId } = payload;
      const targetTask = state.tasks.find((item) => item.id === taskId);

      if (!targetTask) {
        return;
      }
      if (targetTask.archived) {
        state.archivedTasks = state.archivedTasks.filter((id) => id !== taskId);
      }
      if (targetTask.starred) {
        state.starredTasks = state.starredTasks.filter((id) => id !== taskId);
      }

      state.tasks = state.tasks.filter((item) => item.id !== taskId);
    },
  },
});

export const {
  addTask,
  updateTask,
  updateTaskStatus,
  updateTaskPriority,
  insertTaskAsStarred,
  insertTaskAsArchived,
  deleteTask,
} = bulkTaskSlice.actions;
export default bulkTaskSlice.reducer;
