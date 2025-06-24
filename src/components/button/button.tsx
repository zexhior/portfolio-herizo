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
      className={`bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white ${className}`}
      onClick={func}
    >
      {children}
    </Button>
  );
};
