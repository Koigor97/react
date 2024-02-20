import { ButtonProps, AnchorProps } from "../types";

function isAnchorProp(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProp(props)) {
    return <a {...props}></a>;
  }
  return <button {...props}></button>;
}
