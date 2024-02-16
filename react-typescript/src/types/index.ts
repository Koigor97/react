import { PropsWithChildren, ReactNode } from "react";

export type CourseGoalsType = PropsWithChildren<{ title: string }>;

export type HeaderType = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export type GoalsType = {
  title: string;
  description: string;
  id: string;
};

export type GoalsListType = {
  goals: GoalsType[];
};
