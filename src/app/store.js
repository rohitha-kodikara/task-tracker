import { configureStore } from "@reduxjs/toolkit";

import bulkTaskReducer from "@/features/bulk-tasks/BulkTaskSlice";

const store = configureStore({
  reducer: {
    bulkTasks: bulkTaskReducer,
  },
});

export default store;
