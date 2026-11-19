//helper class to calculate days until due and overdue status.
//this helper class calculates the daysUntilDue in both addTask and updateTask
const calculateDueDateFields = (dueDate) => {
  if (!dueDate) {
    return {
      daysUntilDue: null,
      overdue: false,
    };
  }

  const today = new Date();
  const parsedDueDate = new Date(`${dueDate}T00:00:00`);

  today.setHours(0, 0, 0, 0);
  parsedDueDate.setHours(0, 0, 0, 0);

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysUntilDue = Math.round(
    (parsedDueDate.getTime() - today.getTime()) / millisecondsPerDay,
  );

  return {
    daysUntilDue,
    overdue: daysUntilDue < 0,
  };
};

export default calculateDueDateFields;
