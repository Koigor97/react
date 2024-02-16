import { CourseGoalsType } from "../types";

export default function CourseGoal({
  title,
  id,
  onDelete,
  children,
}: CourseGoalsType) {
  return (
    <article>
      <div className="">
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
