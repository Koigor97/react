import { PropsWithChildren, ReactNode } from "react";

type HandleDeleteType = {
  onHandleDelete?: (id: number | string) => void;
};

export type CourseGoalsType = PropsWithChildren<{
  title: string;
  id: number | string;
  onDelete?: HandleDeleteType;
}>;

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
  id: string | number;
};

export type GoalsListType = {
  goals: GoalsType[];
  onDelete?: HandleDeleteType;
};

export type NewGoalPropType = {
  onAddNewGoal: (goal: string, summary: string) => void;
};
