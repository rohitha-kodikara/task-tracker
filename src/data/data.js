import { ListTodo, Loader, CheckCircle2, AlarmClock } from "lucide-react";

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
    textColor: "text-red-700",
  },
  {
    label: "High",
    idle: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100 hover:border-amber-300",
    on: "bg-amber-500 text-white border-amber-500 shadow-sm",
    textColor: "text-amber-700",
  },
  {
    label: "Medium",
    idle: "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 hover:border-teal-300",
    on: "bg-teal-600 text-white border-teal-600 shadow-sm",
    textColor: "text-teal-700",
  },
  {
    label: "Low",
    idle: "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100 hover:border-sky-300",
    on: "bg-sky-600 text-white border-sky-600 shadow-sm",
    textColor: "text-sky-700",
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
  // {
  //   id: 2,
  //   title: "Design onboarding screens",
  //   description: "Three-step welcome flow for new users.",
  //   card: "from-amber-100/75 via-white/50 to-amber-50/45",
  //   panel: "bg-white/50 ring-1 ring-white/60",
  //   bar: "bg-amber-100/80",
  //   status: "Review",
  //   statusChip: "bg-violet-50 text-violet-700 border-violet-200",
  //   priority: "High",
  //   priorityChip: "bg-amber-50 text-amber-700 border-amber-200",
  //   assignee: "Sanduni",
  //   due: "24 Nov",
  //   tags: ["design"],
  //   starred: false,
  //   selected: false,
  //   done: 1,
  //   total: 3,
  // },
  // {
  //   id: 3,
  //   title: "Set up CI pipeline",
  //   description: "Run lint and tests on every pull request.",
  //   card: "from-teal-100/75 via-white/50 to-teal-50/45",
  //   panel: "bg-white/50 ring-1 ring-white/60",
  //   bar: "bg-teal-100/80",
  //   status: "To Do",
  //   statusChip: "bg-slate-100 text-slate-700 border-slate-200",
  //   priority: "Medium",
  //   priorityChip: "bg-teal-50 text-teal-700 border-teal-200",
  //   assignee: "Kasun",
  //   due: "26 Nov",
  //   tags: ["devops", "ci"],
  //   starred: false,
  //   selected: false,
  //   done: 0,
  //   total: 2,
  // },
  // {
  //   id: 4,
  //   title: "Write release notes",
  //   description: "v2.4 changelog for customers.",
  //   card: "from-sky-100/75 via-white/50 to-sky-50/45",
  //   panel: "bg-white/50 ring-1 ring-white/60",
  //   bar: "bg-sky-100/80",
  //   status: "Done",
  //   statusChip: "bg-emerald-50 text-emerald-700 border-emerald-200",
  //   priority: "Low",
  //   priorityChip: "bg-sky-50 text-sky-700 border-sky-200",
  //   assignee: "Dilini",
  //   tags: ["docs"],
  //   completed: true,
  //   starred: false,
  //   selected: false,
  //   done: 0,
  //   total: 0,
  // },
];

export { stats, statusFilters, priorityFilters, tasks };
