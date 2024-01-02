import { useState } from "react";

import Card from "./shared/Card";
import Button from "./shared/Button";

function TaskForm() {
  const [task, setTask] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

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

  return (
    <Card>
      <form>
        <h2>Add a new Priority Task to accomplish </h2>
        {/* @TODO - priority level slect compononet */}
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

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default TaskForm;
