import { MouseEventHandler } from "react";
import { Button } from "../ui/button";

export const ButtonComponent = ({
  func,
  className = "",
  children,
}: {
  className?: string;
  func: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  return (
    <Button
      className={`bg-white text-black text-lg font-bold p-7 rounded-full hover:bg-gray-700 hover:text-white ${className}`}
      onClick={func}
    >
      {children}
    </Button>
  );
};
