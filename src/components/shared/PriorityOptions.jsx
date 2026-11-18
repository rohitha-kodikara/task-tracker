import { priorityFilters } from "../../data/data";
import PriorityChip from "./PriorityChip";

const PriorityOptions = ({ variant, defaultValue }) => {
  if (variant === "dropdown") {
    return (
      <select
        defaultValue={defaultValue}
        className="cursor-pointer rounded-full border border-slate-200 bg-white/90 px-2 py-1 font-semibold shadow-sm transition hover:brightness-95"
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
  return priorityFilters.map((filter) => (
    <PriorityChip key={filter.label} {...filter} />
  ));
};

export default PriorityOptions;
