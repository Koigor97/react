import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import { useTaskItems } from "./context/TaskItems";

import { motion, AnimatePresence } from "framer-motion";

function handleDelete(id, setTask, dummyTask) {
  if (window.confirm("Are you sure you want to delete this task?")) {
    setTask(dummyTask.filter((task) => task.id !== id));
  }
}

function ListItem() {
  const { dummyTask, handleEditTask } = useTaskItems();

  if (!dummyTask || dummyTask.length === 0) return <p>No Tasks to show</p>;

  return (
    <AnimatePresence>
      {dummyTask.map((tasks) => (
        <motion.div
          key={tasks.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <List key={tasks.id} task={tasks} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

function List({ task }) {
  const { dummyTask, setDummyTask: setTask } = useTaskItems();

  return (
    <Card darkMode={false}>
      <span className={`priority-box ${task.priority}`}>{task.priority}</span>
      <button
        className="close-btn"
        onClick={() => handleDelete(task.id, setTask, dummyTask)}
      >
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => handleEditTask(item)}>
        <FaEdit color="purple" />
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
