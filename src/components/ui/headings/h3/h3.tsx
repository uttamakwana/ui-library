import { ComponentProps } from "react";

// type
type H3Type = {
  className?: string;
} & ComponentProps<"h3">;

// FC: H3
const H3 = ({ className, children, ...props }: H3Type) => {
  return (
    <h3 className={`${className} fs-h3`} {...props}>
      {children}
    </h3>
  );
};

export default H3;
