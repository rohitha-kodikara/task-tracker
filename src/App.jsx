import {
  Search,
  Plus,
  Star,
  Archive,
  Trash2,
  Copy,
  Pencil,
  X,
  ChevronDown,
  ArrowUpDown,
  RotateCcw,
  ListTodo,
  Loader,
  CheckCircle2,
  AlarmClock,
  User,
  Calendar,
} from "lucide-react";
import TaskModal from "./components/TaskModal";

/* ---------- Static data (replace with your Redux state later) ---------- */
const stats = [
  {
    label: "To Do",
    value: 5,
    Icon: ListTodo,
    tint: "from-slate-100/90 via-white/75 to-slate-50/60",
    icon: "bg-slate-100/80 text-slate-600 ring-1 ring-slate-200/70",
  },
  {
    label: "In Progress",
    value: 3,
    Icon: Loader,
    tint: "from-sky-100/90 via-white/75 to-blue-50/60",
    icon: "bg-sky-100/80 text-sky-700 ring-1 ring-sky-200/70",
  },
  {
    label: "Done",
    value: 4,
    Icon: CheckCircle2,
    tint: "from-emerald-100/90 via-white/75 to-emerald-50/60",
    icon: "bg-emerald-100/80 text-emerald-700 ring-1 ring-emerald-200/70",
  },
  {
    label: "Overdue",
    value: 2,
    Icon: AlarmClock,
    tint: "from-rose-100/90 via-white/75 to-rose-50/60",
    icon: "bg-rose-100/80 text-rose-700 ring-1 ring-rose-200/70",
  },
];

// idle = unselected look, on = selected look
const statusFilters = [
  {
    label: "To Do",
    active: true,
    idle: "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300",
    on: "bg-slate-800 text-white border-slate-800 shadow-sm",
  },
  {
    label: "In Progress",
    idle: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300",
    on: "bg-blue-600 text-white border-blue-600 shadow-sm",
  },
  {
    label: "Review",
    idle: "bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100 hover:border-violet-300",
    on: "bg-violet-600 text-white border-violet-600 shadow-sm",
  },
  {
    label: "Done",
    idle: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300",
    on: "bg-emerald-600 text-white border-emerald-600 shadow-sm",
  },
];

const priorityFilters = [
  {
    label: "Urgent",
    active: true,
    idle: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100 hover:border-rose-300",
    on: "bg-rose-600 text-white border-rose-600 shadow-sm",
  },
  {
    label: "High",
    idle: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100 hover:border-amber-300",
    on: "bg-amber-500 text-white border-amber-500 shadow-sm",
  },
  {
    label: "Medium",
    idle: "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 hover:border-teal-300",
    on: "bg-teal-600 text-white border-teal-600 shadow-sm",
  },
  {
    label: "Low",
    idle: "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100 hover:border-sky-300",
    on: "bg-sky-600 text-white border-sky-600 shadow-sm",
  },
];

// Each card gets a soft tint that matches its priority color
const tasks = [
  {
    id: 1,
    title: "Fix payment gateway timeout",
    description: "Checkout fails after 30s on slow networks.",
    card: "from-rose-100/75 via-white/50 to-rose-50/45",
    panel: "bg-white/50 ring-1 ring-white/60",
    bar: "bg-rose-100/80",
    status: "In Progress",
    statusChip: "bg-blue-50 text-blue-700 border-blue-200",
    priority: "Urgent",
    priorityChip: "bg-rose-50 text-rose-700 border-rose-200",
    assignee: "Nimal",
    due: "Overdue · 12 Nov",
    overdue: true,
    tags: ["backend"],
    starred: true,
    selected: true,
    done: 2,
    total: 3,
  },
  {
    id: 2,
    title: "Design onboarding screens",
    description: "Three-step welcome flow for new users.",
    card: "from-amber-100/75 via-white/50 to-amber-50/45",
    panel: "bg-white/50 ring-1 ring-white/60",
    bar: "bg-amber-100/80",
    status: "Review",
    statusChip: "bg-violet-50 text-violet-700 border-violet-200",
    priority: "High",
    priorityChip: "bg-amber-50 text-amber-700 border-amber-200",
    assignee: "Sanduni",
    due: "24 Nov",
    tags: ["design"],
    starred: false,
    selected: false,
    done: 1,
    total: 3,
  },
  {
    id: 3,
    title: "Set up CI pipeline",
    description: "Run lint and tests on every pull request.",
    card: "from-teal-100/75 via-white/50 to-teal-50/45",
    panel: "bg-white/50 ring-1 ring-white/60",
    bar: "bg-teal-100/80",
    status: "To Do",
    statusChip: "bg-slate-100 text-slate-700 border-slate-200",
    priority: "Medium",
    priorityChip: "bg-teal-50 text-teal-700 border-teal-200",
    assignee: "Kasun",
    due: "26 Nov",
    tags: ["devops", "ci"],
    starred: false,
    selected: false,
    done: 0,
    total: 2,
  },
  {
    id: 4,
    title: "Write release notes",
    description: "v2.4 changelog for customers.",
    card: "from-sky-100/75 via-white/50 to-sky-50/45",
    panel: "bg-white/50 ring-1 ring-white/60",
    bar: "bg-sky-100/80",
    status: "Done",
    statusChip: "bg-emerald-50 text-emerald-700 border-emerald-200",
    priority: "Low",
    priorityChip: "bg-sky-50 text-sky-700 border-sky-200",
    assignee: "Dilini",
    tags: ["docs"],
    completed: true,
    starred: false,
    selected: false,
    done: 0,
    total: 0,
  },
];

/* ---------- Page ---------- */
export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-slate-900">
      <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl space-y-6 p-4 sm:p-8">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="bg-gradient-to-r from-indigo-200 via-violet-200 to-fuchsia-200 bg-clip-text text-2xl font-semibold tracking-tight text-transparent">
              Task Tracker
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Plan, track and finish work with your team
            </p>
          </div>
          <TaskModal />
        </header>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map(({ label, value, Icon, tint, icon }) => (
            <div
              key={label}
              className={`glass glass-hover rounded-2xl bg-gradient-to-br p-4 ${tint}`}
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-2.5 ${icon}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-slate-900">
                    {value}
                  </p>
                  <p className="text-sm font-semibold text-slate-700">
                    {label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar: search, assignee, sort, filter chips */}
        <div className="glass space-y-4 rounded-2xl bg-gradient-to-br from-white/60 via-white/45 to-slate-100/40 p-4">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <input
                placeholder="Search title, description or tag..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-500 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
              <option>All assignees</option>
              <option>Nimal</option>
              <option>Kasun</option>
              <option>Sanduni</option>
              <option>Dilini</option>
            </select>
            <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
              <option>Sort: Last updated</option>
              <option>Sort: Due date</option>
              <option>Sort: Priority</option>
              <option>Sort: Title</option>
            </select>
            <button className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              <ArrowUpDown className="h-4 w-4" />
              DESC
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
            {statusFilters.map((f) => (
              <button
                key={f.label}
                className={`rounded-full border px-3 py-1 transition ${f.active ? f.on : f.idle}`}
              >
                {f.label}
              </button>
            ))}
            <span className="h-4 w-px bg-slate-200" />
            {priorityFilters.map((f) => (
              <button
                key={f.label}
                className={`rounded-full border px-3 py-1 transition ${f.active ? f.on : f.idle}`}
              >
                {f.label}
              </button>
            ))}
            <span className="h-4 w-px bg-slate-200" />
            <button className="flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-700 transition hover:bg-amber-100">
              <Star className="h-3 w-3" />
              Starred
            </button>
            <button className="flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-700 transition hover:bg-indigo-100">
              <Archive className="h-3 w-3" />
              Archived
            </button>
            <button
              type="button"
              className="ml-auto flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white/80 px-3.5 py-1.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-300 hover:bg-white hover:text-indigo-700 active:translate-y-px"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          </div>
        </div>

        {/* Bulk action bar */}
        <div className="glass flex flex-wrap items-center justify-between gap-2 rounded-xl bg-gradient-to-r from-indigo-600/90 to-violet-600/90 px-4 py-2.5 text-sm text-white">
          <span className="font-medium">1 selected</span>
          <div className="flex items-center gap-2">
            <select className="rounded-lg border border-white/20 bg-white/95 px-2 py-1 text-xs text-slate-700">
              <option>Set status…</option>
              <option>To Do</option>
              <option>In Progress</option>
              <option>Review</option>
              <option>Done</option>
            </select>
            <button className="flex items-center gap-1 rounded-lg bg-white/15 px-3 py-1 transition hover:bg-white/25">
              <Archive className="h-4 w-4" />
              Archive
            </button>
            <button className="flex items-center gap-1 rounded-lg bg-rose-500 px-3 py-1 transition hover:bg-rose-600">
              <Trash2 className="h-4 w-4" />
              Delete
            </button>
            <button className="rounded-lg p-1 transition hover:bg-white/20">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Select all */}
        <div className="flex items-center justify-between px-1">
          <label className="flex items-center gap-2 text-xs font-medium text-slate-300">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
            />
            Select all ({tasks.length})
          </label>
          <span className="text-xs text-slate-400">{tasks.length} tasks</span>
        </div>

        {/* Task list */}
        <div className="space-y-3">
          {tasks.map((t) => (
            <div
              key={t.id}
              className={`glass glass-hover flex gap-3 rounded-2xl bg-gradient-to-br p-4 ${t.card} ${t.completed ? "opacity-80" : ""}`}
            >
              <input
                type="checkbox"
                defaultChecked={t.selected}
                className="mt-1.5 h-4 w-4 rounded border-slate-300 accent-indigo-600"
              />

              <div className="min-w-0 flex-1 space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3
                      className={`font-semibold ${t.completed ? "text-slate-600 line-through" : "text-slate-900"}`}
                    >
                      {t.title}
                    </h3>
                    <p className="truncate text-sm text-slate-700">
                      {t.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1 text-slate-700">
                    <button
                      type="button"
                      aria-label="Star task"
                      className="rounded-lg border border-slate-300/70 bg-white/85 p-1.5 shadow-sm transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-600 active:translate-y-px"
                    >
                      <Star
                        className={`h-4 w-4 ${t.starred ? "fill-amber-400 text-amber-500" : ""}`}
                      />
                    </button>
                    <button
                      type="button"
                      aria-label="Edit task"
                      className="rounded-lg border border-slate-300/70 bg-white/85 p-1.5 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 active:translate-y-px"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Duplicate task"
                      className="rounded-lg border border-slate-300/70 bg-white/85 p-1.5 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 active:translate-y-px"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Archive task"
                      className="rounded-lg border border-slate-300/70 bg-white/85 p-1.5 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 active:translate-y-px"
                    >
                      <Archive className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Delete task"
                      className="rounded-lg border border-slate-300/70 bg-white/85 p-1.5 shadow-sm transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700 active:translate-y-px"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <select
                    defaultValue={t.status}
                    className={`cursor-pointer rounded-full border px-2 py-1 font-semibold shadow-sm transition hover:brightness-95 ${t.statusChip}`}
                  >
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Review</option>
                    <option>Done</option>
                  </select>
                  <select
                    defaultValue={t.priority}
                    className={`cursor-pointer rounded-full border px-2 py-1 font-semibold shadow-sm transition hover:brightness-95 ${t.priorityChip}`}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </select>
                  <span className="flex items-center gap-1 font-medium text-slate-700">
                    <User className="h-3 w-3" />
                    {t.assignee}
                  </span>
                  {t.due && (
                    <span
                      className={`flex items-center gap-1 font-medium ${t.overdue ? "text-rose-600" : "text-slate-700"}`}
                    >
                      <Calendar className="h-3 w-3" />
                      {t.due}
                    </span>
                  )}
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-violet-200 bg-violet-50 px-2 py-1 font-medium text-violet-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`h-1.5 flex-1 overflow-hidden rounded-full ${t.bar}`}
                  >
                    <div
                      className="h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      style={{
                        width: t.total ? `${(t.done / t.total) * 100}%` : "0%",
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-lg border border-slate-300/70 bg-white/80 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-indigo-300 hover:bg-white hover:text-indigo-700"
                  >
                    {t.done}/{t.total} subtasks
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Expanded subtask panel design (show it when a row is expanded) */}
                {t.id === 1 && (
                  <div className={`space-y-2 rounded-xl p-3 ${t.panel}`}>
                    {[
                      { title: "Reproduce issue", done: true },
                      { title: "Increase timeout", done: true },
                      { title: "Add retry logic", done: false },
                    ].map((s) => (
                      <div
                        key={s.title}
                        className="flex items-center gap-2 text-sm text-slate-800"
                      >
                        <input
                          type="checkbox"
                          defaultChecked={s.done}
                          className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
                        />
                        <span
                          className={`flex-1 ${s.done ? "text-slate-600 line-through" : ""}`}
                        >
                          {s.title}
                        </span>
                        <button
                          type="button"
                          aria-label="Remove subtask"
                          className="rounded-md border border-slate-300/70 bg-white/85 p-1 text-slate-600 shadow-sm transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <input
                        placeholder="Add subtask…"
                        className="flex-1 rounded-lg border border-white/60 bg-white/80 px-3 py-1.5 text-sm text-slate-900 placeholder:text-slate-500 transition focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      />
                      <button className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white transition hover:bg-indigo-700">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

