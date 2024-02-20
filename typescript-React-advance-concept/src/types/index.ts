import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

export type aReactNode = {
  anNode: ReactNode;
};

export type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export type ButtonProps = ComponentPropsWithoutRef<"button"> & { href?: never };

export type AnchorProps = ComponentPropsWithoutRef<"a"> & { href?: string };

// export type ButtonPropsType = ButtonProps | AnchorProps;

export type ContainerPropsType<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;
