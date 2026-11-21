// import { tasks } from "../data/data";
import Header from "../components/Header";
import StatisticsList from "../components/StatisticsList";
import TaskTrackerToolbar from "../components/dashboard-toolbar/TaskTrackerToolbar";
import BulkActionBar from "../components/bulk-action-bar/BulkActionBar";

import TaskList from "../components/tasks/TaskList";
import TaskSelectionHeader from "../components/TaskSelectionHeader";
import { useSelector } from "react-redux";

import { TaskProvider } from "./taskcontext/TaskProvider";
import { useSearchParams } from "react-router-dom";

const TaskTrackerMain = () => {
  const tasks = useSelector((state) => state.bulkTasks.tasks);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTask = searchParams.get("search") || "";
  const assignee = searchParams.get("assignee") || "all";

  function updateSearchParams(key, value) {
    const newSearchParams = new URLSearchParams(searchParams);

    if (value === "" || value === null) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, value);
    }

    setSearchParams(newSearchParams);
  }

  const filteredTasks = tasks.filter((task) => {
    const query = searchTask.toLowerCase();

    const matchSearches =
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query) ||
      task.tags.some((tag) => tag.toLowerCase().includes(query));

    const normalizedAssignee = assignee.toLowerCase();

    const matchAssignee =
      normalizedAssignee === "all" ||
      task.assignee?.toLowerCase() === normalizedAssignee;

    return matchSearches && matchAssignee;
  });

  console.log(filteredTasks);
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-slate-900">
      <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl space-y-6 p-4 sm:p-8">
        <TaskProvider>
          {/* Header */}
          <Header />
          {/* Stat cards */}
          <StatisticsList />

          {/* Toolbar: search, assignee, sort, filter chips */}
          <TaskTrackerToolbar
            searchTask={searchTask}
            assignee={assignee}
            updateSearchParams={updateSearchParams}
          />

          {/* Bulk action bar */}
          <BulkActionBar />

          {/* Select all */}
          <TaskSelectionHeader tasks={tasks} />

          {/* Task list */}
          <TaskList tasks={filteredTasks} />
        </TaskProvider>
      </div>
    </div>
  );
};

export default TaskTrackerMain;
