import { ComponentProps } from "react";

// type
type PType = {
  className?: string;
} & ComponentProps<"p">;

// FC: P
export const P = ({ className, children, ...props }: PType) => {
  return (
    <p className={`${className}`} {...props}>
      {children}
    </p>
  );
};
