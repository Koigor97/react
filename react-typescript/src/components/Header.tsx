import { PropsWithChildren } from "react";

type HeaderTypes = PropsWithChildren<{ image: { src: string; alt: string } }>;

export default function Header({ image, children }: HeaderTypes) {
  return (
    <header>
      <div>
        <img {...image} />
      </div>
      {children}
    </header>
  );
}
