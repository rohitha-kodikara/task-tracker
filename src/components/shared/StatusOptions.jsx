import { statusFilters } from "../../data/data";
import StatusChip from "../dashboard-toolbar/StatusChip";

const StatusOptions = ({
  variant = "chips",
  feature,
  className,
  value,
  onChange,
}) => {
  if (variant === "dropdown") {
    return (
      <select
        value={value}
        onChange={onChange}
        className={`border border-white/20 bg-white/95 px-2 py-1 text-xs text-slate-700 ${className}`}
      >
        {feature === "bulk-action-bar" && (
          <option value="">Set status...</option>
        )}

        {statusFilters.map((status) => (
          <option key={status.label} value={status.label}>
            {status.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div className={`${className} flex gap-2`}>
      <StatusChip
        label="All"
        idle="bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
        on="bg-slate-700 text-white border-slate-700 shadow-sm"
        isSelected={value === "all"}
        onClick={() => onChange({ target: { value: "all" } })}
      />
      {statusFilters.map((status) => (
        <StatusChip
          key={status.label}
          {...status}
          isSelected={value === status.label}
          onClick={() => onChange({ target: { value: status.label } })}
        />
      ))}
    </div>
  );
};

export default StatusOptions;
