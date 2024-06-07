import { ComponentProps } from "react";

// type
type H5Type = {
  className?: string;
} & ComponentProps<"h5">;

// FC: H5
const H5 = ({ className, children, ...props }: H5Type) => {
  return (
    <h5 className={`${className} fs-h5`} {...props}>
      {children}
    </h5>
  );
};

export default H5;
