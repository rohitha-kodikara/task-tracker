import { configureStore } from "@reduxjs/toolkit";

import bulkTaskReducer from "@/features/tasks/TaskSlice";

const store = configureStore({
  reducer: {
    bulkTasks: bulkTaskReducer,
  },
});

export default store;
