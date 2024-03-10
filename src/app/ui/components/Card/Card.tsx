import { ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
  paddingX?: string;
  paddingY?: string;
};

export const Card = ({ children, paddingX, paddingY }: CardProps) => {
  return (
    <div
      className={`${paddingX} ${paddingY} h-full w-full bg-white rounded-lg shadow-xl`}
    >
      {children}
    </div>
  );
};
