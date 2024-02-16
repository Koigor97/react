import CourseGoal from "./CourseGoals";
import { GoalsListType } from "../types";

export default function ListItem({ goals }: GoalsListType) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
