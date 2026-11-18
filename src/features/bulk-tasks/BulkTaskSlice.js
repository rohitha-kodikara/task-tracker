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
        return {
          payload: {
            id: nanoid(),
            status: "in_progress", // default
            priority: "medium", // default
            done: false, // default
            starred: false, // default
            archived: false, // default
            subtasks: [], // default
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            ...formData, // title, description, assignee, dueDate, tags (overrides defaults if provided)
          },
        };
      },
      // runs second: puts the object into the array
      reducer(state, { payload }) {
        state.tasks.unshift(payload); // newest first
      },
    },
  },
});

export const { addTask } = bulkTaskSlice.actions;
export default bulkTaskSlice.reducer;
