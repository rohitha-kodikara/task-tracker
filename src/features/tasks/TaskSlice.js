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
  },
});

export const { addTask, updateTask, updateTaskStatus, updateTaskPriority } =
  bulkTaskSlice.actions;
export default bulkTaskSlice.reducer;
