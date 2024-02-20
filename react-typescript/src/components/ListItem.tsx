import CourseGoal from "./CourseGoals";
import { GoalsListType } from "../types";

export default function ListItem({ goals, onDelete }: GoalsListType) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
