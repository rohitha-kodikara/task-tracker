import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskTrackerMain from "./components/TaskTrackerMain";

/* ---------- Page ---------- */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskTrackerMain />} />
      </Routes>
    </BrowserRouter>
  );
}
