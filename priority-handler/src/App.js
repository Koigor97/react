import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import ListItem from "./components/ListItem";
import TaskStats from "./components/TaskStats";
import TaskForm from "./components/TaskForm";

import DummyTasks from "./data/dummyTaskData";

function App() {
  const [dummyTask, setDummyTask] = useState(DummyTasks);

  function handleAddNewTask(value) {
    setDummyTask([value, ...dummyTask]);
  }

  return (
    <>
      <Header />
      <Main>
        <TaskForm handleNewTask={handleAddNewTask} />
        <TaskStats dummyTask={dummyTask} />
        {dummyTask.map((tasks) => (
          <ListItem
            key={tasks.id}
            task={tasks}
            dummyTask={dummyTask}
            setTask={setDummyTask}
          />
        ))}
      </Main>
    </>
  );
}

export default App;
