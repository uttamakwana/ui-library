import { ComponentProps } from "react";

// type
type H2Type = {
  className?: string;
} & ComponentProps<"h2">;

// FC: H2
const H2 = ({ className, children, ...props }: H2Type) => {
  return (
    <h2 className={`${className} fs-h2`} {...props}>
      {children}
    </h2>
  );
};

export default H2;
