const PriorityChip = ({ label, active, idle, on }) => {
  return (
    <button
      key={label}
      className={`rounded-full border px-3 py-1 transition ${active ? on : idle}`}
    >
      {label}
    </button>
  );
};

export default PriorityChip;
