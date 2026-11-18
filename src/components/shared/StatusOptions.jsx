import { statusFilters } from "../../data/data";
import StatusChip from "../dashboard-toolbar/StatusChip";

const StatusOptions = ({
  variant = "chips",
  feature,
  defaultValue = "In Progress",
}) => {
  if (variant === "dropdown") {
    return (
      <select
        defaultValue={defaultValue}
        className="rounded-lg border border-white/20 bg-white/95 px-2 py-1 text-xs text-slate-700"
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
    <div className="flex gap-2">
      {statusFilters.map((status) => (
        <StatusChip key={status.label} {...status} />
      ))}
    </div>
  );
};

export default StatusOptions;
