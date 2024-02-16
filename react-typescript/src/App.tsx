import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header.tsx";
import ListItem from "./components/ListItem.tsx";

import imgLogo from "./assets/goals.jpg";
import { GoalsType } from "./types/index.ts";

export default function App() {
  const [goals, setGoals] = useState<GoalsType[]>([]);

  function handleAddGoal() {
    console.log("Click");
    setGoals((previousGoals) => {
      const newGoal: GoalsType = {
        title: "Finish React",
        description: "I want to finish learning React by the End of Nextweek",
        id: uuidv4(),
      };
      return [...previousGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number | string) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: imgLogo, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <button onClick={handleAddGoal}>Add Goal</button>

      <ListItem goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
