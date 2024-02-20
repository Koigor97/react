import { InputProps } from "../types";

export default function Input({ id, label, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} />
    </p>
  );
}
