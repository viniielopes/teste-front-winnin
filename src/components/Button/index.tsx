import { ButtonProps } from "./types";

export const Button = ({ active = false, children }: ButtonProps) => {
  const bg = active ? "bg-primary" : "bg-gray";

  return (
    <button
      className={`last:mr-0 mr-4 rounded-lg ${bg} text-xl leading-6 py-3 w-48 text-white font-semibold`}
    >
      {children}
    </button>
  );
};
