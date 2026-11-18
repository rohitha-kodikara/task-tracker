import { priorityFilters } from "../../data/data";
import PriorityChip from "./PriorityChip";

const PriorityOptions = ({ variant, defaultValue, className }) => {
  if (variant === "dropdown") {
    return (
      <select
        defaultValue={defaultValue}
        className={`cursor-pointer border border-slate-200 bg-white/90 px-2 py-1 font-semibold shadow-sm transition hover:brightness-95 ${className}`}
      >
        {priorityFilters.map((priority) => (
          <option
            key={priority.label}
            value={priority.label}
            className={`font-semibold ${priority.textColor}`}
          >
            {priority.label}
          </option>
        ))}
      </select>
    );
  }
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {priorityFilters.map((filter) => (
        <PriorityChip key={filter.label} {...filter} />
      ))}
    </div>
  );
};

export default PriorityOptions;
