function TaskStats({ dummyTask }) {
  const taskCount = dummyTask.length;
  const completionPercentage = Math.round(
    (dummyTask.completed / taskCount) * 100
  );

  return (
    <div className="task-stats">
      <h4>{`Tasks: ${taskCount < 9 ? "0" : taskCount}${taskCount}`}</h4>
      <h4>{`Completion: ${
        isNaN(completionPercentage) ? 0 : completionPercentage
      }%`}</h4>
    </div>
  );
}

export default TaskStats;
