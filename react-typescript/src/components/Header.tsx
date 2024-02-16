import { HeaderType } from "../types";

export default function Header({ image, children }: HeaderType) {
  return (
    <header>
      <div>
        <img {...image} />
      </div>
      {children}
    </header>
  );
}
