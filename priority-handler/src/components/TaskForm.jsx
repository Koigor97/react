import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "./shared/Card";
import PrioritySelect from "./PrioritySelect";
import Button from "./shared/Button";

function TaskForm({ handleNewTask }) {
  const [task, setTask] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState("");

  function handleInputForm(e) {
    if (task === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (task !== "" && task.trim().length >= 100) {
      setMessage("Task must be 100 characters maximum");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setTask(e.target.value);
  }

  function handleSelectPriority(value) {
    setPriority(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim().length > 10) {
      const newTask = {
        id: uuidv4(),
        completed: false,
        priority,
        text: task,
      };

      handleNewTask(newTask);
      setTask("");
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Add a new Priority Task to accomplish </h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="add a task"
            value={task}
            onChange={handleInputForm}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Add
          </Button>
        </div>

        <PrioritySelect
          selectPriority={(value) => handleSelectPriority(value)}
        />

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default TaskForm;
