const PriorityChip = ({ label, active, idle, on, isSelected, onClick }) => {
  return (
    <button
      key={label}
      className={`rounded-full border px-3 py-1 transition ${active ? on : idle} ${isSelected ? "ring-2 ring-blue-500" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PriorityChip;
