// react
import type { ComponentProps } from "react";

// type
type DivType = {
  className?: string;
} & ComponentProps<"div">;

// FC: Div
const Div = ({ className = "", children, ...props }: DivType) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
};

export default Div;
