// import { tasks } from "../data/data";
import Header from "../components/Header";
import StatisticsList from "../components/StatisticsList";
import TaskTrackerToolbar from "../components/dashboard-toolbar/TaskTrackerToolbar";

import TaskList from "../components/tasks/TaskList";
import { useSelector } from "react-redux";
import {} from "lucide-react";

import { TaskProvider } from "./taskcontext/TaskProvider";
import { useSearchParams } from "react-router-dom";
import { stats } from "../data/data";

const TaskTrackerMain = () => {
  const tasks = useSelector((state) => state.bulkTasks.tasks);
  const [searchParams, setSearchParams] = useSearchParams();
  //getting filtered starred tasks
  const starredTaskIds = useSelector((state) => state.bulkTasks.starredTasks);
  const archivedTaskIds = useSelector((state) => state.bulkTasks.archivedTasks);

  const searchTask = searchParams.get("search") || "";
  const assignee = searchParams.get("assignee") || "all";
  const status = searchParams.get("status") || "all";
  const priority = searchParams.get("priority") || "all";
  const starred = searchParams.get("starred") === "true";
  const archived = searchParams.get("archived") === "true";
  const taskSort = searchParams.get("sort") || "all";

  function updateSearchParams(key, value) {
    const newSearchParams = new URLSearchParams(searchParams);

    if (value === "" || value === null) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, value);
    }

    setSearchParams(newSearchParams);
  }
  //filtering tasks
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

    const normalizedStatus = status.toLowerCase();

    const matchStatus =
      normalizedStatus === "all" ||
      task.status?.toLowerCase() === normalizedStatus;

    const normalizedPriority = priority.toLowerCase();

    const matchPriority =
      normalizedPriority === "all" ||
      task.priority?.toLowerCase() === normalizedPriority;

    //adding starred filter to the task list
    const matchStarred = !starred || starredTaskIds.includes(task.id);
    //adding archived filter to the task list
    const matchArchived = !archived || archivedTaskIds.includes(task.id);

    return (
      matchSearches &&
      matchAssignee &&
      matchStatus &&
      matchPriority &&
      matchStarred &&
      matchArchived
    );
  });

  const sortedTasks =
    taskSort === "all"
      ? filteredTasks
      : filteredTasks.slice().sort((a, b) => {
          if (taskSort === "lastUpdated") {
            return new Date(b.updatedAt) - new Date(a.updatedAt);
          } else if (taskSort === "dueDate") {
            return new Date(a.dueDate) - new Date(b.dueDate);
          } else if (taskSort === "priority") {
            const priorityRank = { Urgent: 1, High: 2, Medium: 3, Low: 4 };
            return priorityRank[a.priority] - priorityRank[b.priority];
          } else if (taskSort === "title") {
            return a.title.localeCompare(b.title);
          }
          return 0;
        });

  //Reset All filters
  function resetFilters() {
    setSearchParams({});
  }

  const TodoCount = sortedTasks.filter(
    (task) => task.status === "To Do",
  ).length;
  const InProgressCount = sortedTasks.filter(
    (task) => task.status === "In Progress",
  ).length;
  const DoneCount = sortedTasks.filter((task) => task.status === "Done").length;
  const OverDueCount = sortedTasks.reduce((count, task) => {
    if (
      task.dueDate &&
      new Date(task.dueDate) < new Date() &&
      task.status !== "Done"
    ) {
      return count + 1;
    }
    return count;
  }, 0);

  const statisticValues = {
    Todo: TodoCount,
    InProgress: InProgressCount,
    Done: DoneCount,
    Overdue: OverDueCount,
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-slate-900">
      <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl space-y-6 p-4 sm:p-8">
        <TaskProvider>
          {/* Header */}
          <Header />
          {/* Stat cards */}
          <StatisticsList stats={stats} statisticValues={statisticValues} />

          {/* Toolbar: search, assignee, sort, filter chips */}
          <TaskTrackerToolbar
            searchTask={searchTask}
            assignee={assignee}
            status={status}
            priority={priority}
            starred={starred}
            archived={archived}
            taskSort={taskSort}
            resetFilters={resetFilters}
            updateSearchParams={updateSearchParams}
          />

          {/* Task list */}
          <TaskList tasks={sortedTasks} />
        </TaskProvider>
      </div>
    </div>
  );
};

export default TaskTrackerMain;
