import { createContext, useContext, useState } from "react";

const TaskItemsContext = createContext();

function TaskItemsProvider({ children }) {
  const [dummyTask, setDummyTask] = useState([
    {
      id: 1,
      priority: "high",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
      completed: false,
    },
  ]);

  const [taskEdit, setTaskEdit] = useState({
    item: {},
    edit: false,
  });

  function handleAddNewTask(value) {
    setDummyTask([value, ...dummyTask]);
  }

  function handleEditTask(item) {
    setTaskEdit({
      item,
      edit: true,
    });
  }

  return (
    <TaskItemsContext.Provider
      value={{ dummyTask, setDummyTask, handleAddNewTask, handleEditTask }}
    >
      {children}
    </TaskItemsContext.Provider>
  );
}

function useTaskItems() {
  const context = useContext(TaskItemsContext);
  if (!context) {
    throw new Error("useTaskItems must be used within a TaskItemsProvider");
  }
  return context;
}

export { useTaskItems, TaskItemsProvider };
