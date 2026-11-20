import TaskModal from "./task-modal/TaskModal";

const Header = () => {
  return (
    <header className="glass flex items-center justify-between gap-4 rounded-lg p-4">
      <div>
        <h1 className="bg-gradient-to-r from-indigo-200 via-violet-200 to-fuchsia-200 bg-clip-text text-2xl font-semibold tracking-tight text-transparent">
          Task Tracker
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Plan, track and finish work with your team
        </p>
      </div>
      <TaskModal
        mode="create"
        bgColor="border-slate-300/70 bg-white/85 "
        className="text-gray-800"
      />
    </header>
  );
};

export default Header;
