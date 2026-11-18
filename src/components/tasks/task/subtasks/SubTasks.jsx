import IndividualSubTask from "./IndividualSubTask";
import SubTaskForm from "./SubTaskForm";

const SubTasks = ({ task }) => {
  return (
    <>
      <div className={`space-y-2 rounded-xl p-3 ${task.panel}`}>
        {[
          { title: "Reproduce issue", done: true },
          { title: "Increase timeout", done: true },
          { title: "Add retry logic", done: false },
        ].map((s) => (
          <IndividualSubTask key={s.title} s={s} />
        ))}

        <SubTaskForm />
      </div>
    </>
  );
};

export default SubTasks;
