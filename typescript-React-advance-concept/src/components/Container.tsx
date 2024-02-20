import { ContainerPropsType } from "../types";
import { type ElementType } from "react";

export default function Container<U extends ElementType>({
  as,
  children,
  ...props
}: ContainerPropsType<U>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}
