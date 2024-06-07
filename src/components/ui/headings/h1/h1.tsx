import { ComponentProps } from "react";

// type
type H1Type = {
  className?: string;
} & ComponentProps<"h1">;

// FC: H1
const H1 = ({ className, children, ...props }: H1Type) => {
  return (
    <h1 className={`${className} fs-h1`} {...props}>
      {children}
    </h1>
  );
};

export default H1;
