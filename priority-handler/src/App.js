import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import ListItem from "./components/ListItem";
import TaskStats from "./components/TaskStats";
import TaskForm from "./components/TaskForm";

import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
          {dummyTask.map((tasks) => (
            <motion.div
              key={tasks.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ListItem
                key={tasks.id}
                task={tasks}
                dummyTask={dummyTask}
                setTask={setDummyTask}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </Main>
    </>
  );
}

export default App;
