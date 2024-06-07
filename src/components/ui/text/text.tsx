import { ComponentProps } from "react";

// type
type TextType = {
  className?: string;
  children: string;
} & ComponentProps<"p">;

// FC: Text
export const Text = ({ className = "", children, ...props }: TextType) => {
  return (
    <p className={`${className}`} {...props}>
      {children}
    </p>
  );
};
