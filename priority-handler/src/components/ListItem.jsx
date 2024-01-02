import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function ListItem({ task, setTask, dummyTask }) {
  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTask(dummyTask.filter((task) => task.id !== id));
    }
  }

  return (
    <Card darkMode={false}>
      <span className={`priority-box ${task.priority}`}>{task.priority}</span>
      <button className="close-btn" onClick={() => handleDelete(task.id)}>
        <FaTimes color="purple" />
      </button>
      <div>{task.text}</div>
      <form>
        <label className="checkbox-label">
          complete
          <input type="checkbox" name="done" id="done" value={1} />
        </label>
      </form>
    </Card>
  );
}

export default ListItem;
