import { PropsWithChildren } from "react";

type CourseGoalsType = PropsWithChildren<{ title: string }>;

export default function CourseGoal({ title, children }: CourseGoalsType) {
  return (
    <article>
      <div className="">
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
