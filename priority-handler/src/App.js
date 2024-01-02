import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import ListItem from "./components/ListItem";
import TaskStats from "./components/TaskStats";
import TaskForm from "./components/TaskForm";

import DummyTasks from "./data/dummyTaskData";

function App() {
  const [dummyTask, setDummyTask] = useState(DummyTasks);

  return (
    <>
      <Header />
      <Main>
        <TaskForm />
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
