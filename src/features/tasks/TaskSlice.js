import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

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
        let daysUntilDue = null;
        let overdue = false;
        // Calculate daysUntilDue and overdue status if dueDate is provided
        if (formData.dueDate) {
          const today = new Date();
          const dueDate = new Date(`${formData.dueDate}T00:00:00`);

          today.setHours(0, 0, 0, 0);
          dueDate.setHours(0, 0, 0, 0);

          const millisecondsPerDay = 1000 * 60 * 60 * 24;

          daysUntilDue = Math.round(
            (dueDate.getTime() - today.getTime()) / millisecondsPerDay,
          );

          overdue = daysUntilDue < 0;
        }

        return {
          payload: {
            id: nanoid(),
            done: false,
            total: 0,
            completed: 0,
            overdue,
            daysUntilDue,
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
      const { id, ...changes } = payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        Object.assign(task, changes);
        task.updatedAt = new Date().toISOString();
      }
    },
  },
});

export const { addTask } = bulkTaskSlice.actions;
export default bulkTaskSlice.reducer;
