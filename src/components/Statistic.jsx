const Statistic = ({ label, value, Icon, tint, icon }) => {
  return (
    <div
      key={label}
      className={`glass glass-hover rounded-2xl bg-gradient-to-br ${tint} p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div className={`rounded-xl p-2.5 ${icon}`}>
            <Icon className="h-5 w-5" />
          </div>
        )}
        <div>
          <p className="text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
          <p className="text-sm font-semibold text-slate-700">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
