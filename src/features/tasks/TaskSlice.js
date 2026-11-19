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
      const { id, ...changes } = payload;
      const task = state.tasks.find((item) => item.id === id);

      if (!task) {
        return;
      }

      if (Object.prototype.hasOwnProperty.call(changes, "dueDate")) {
        const dueDateFields = calculateDueDateFields(changes.dueDate);

        Object.assign(task, changes, dueDateFields, {
          dueDate: changes.dueDate || null,
        });
      } else {
        Object.assign(task, changes);
      }

      task.updatedAt = new Date().toISOString();
    },
  },
});

export const { addTask, updateTask } = bulkTaskSlice.actions;
export default bulkTaskSlice.reducer;
