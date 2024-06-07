import { ComponentProps } from "react";

// type
type H4Type = {
  className?: string;
} & ComponentProps<"h4">;

// FC: H4
const H4 = ({ className, children, ...props }: H4Type) => {
  return <h4 className={`${className} fs-h4`} {...props}>{children}</h4>;
};

export default H4;
