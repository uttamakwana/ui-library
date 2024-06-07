import { ComponentProps } from "react";

// type
type H6Type = {
  className?: string;
} & ComponentProps<"h6">;

// FC: H6
const H6 = ({ className, children, ...props }: H6Type) => {
  return (
    <h6 className={`${className} fs-h6`} {...props}>
      {children}
    </h6>
  );
};

export default H6;
