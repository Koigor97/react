import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function ListItem({ task, setTask, dummyTask }) {
  console.log(dummyTask);
  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTask(dummyTask.filter((task) => task.id !== id));
    }
  }

  function handleCheckBox(id) {
    setTask(
      dummyTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <Card darkMode={false} dummyTask={dummyTask.completed}>
      <span className={`priority-box ${task.priority}`}>{task.priority}</span>
      <button className="close-btn" onChange={() => handleDelete(task.id)}>
        <FaTimes color="purple" />
      </button>
      <div>{task.text}</div>
      <form>
        <label className="checkbox-label">
          complete
          <input
            type="checkbox"
            name="done"
            id="done"
            value={task.completed}
            onChange={() => handleCheckBox(task.id)}
          />
        </label>
      </form>
    </Card>
  );
}

export default ListItem;
