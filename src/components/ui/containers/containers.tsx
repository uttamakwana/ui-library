// react
import type { ComponentProps } from "react";
// types
import { DisplayBreakpointType } from "../../../types/common";

// type
type ContainerType = {
  className?: string;
  padded?: true;
  center?: true;
  rounded?: true;
  breakpoint?: DisplayBreakpointType;
} & ComponentProps<"div">;

// FC: Container
export const Container = ({
  className = "",
  padded,
  rounded,
  center,
  breakpoint = "auto",
  children,
  ...props
}: ContainerType) => {
  return (
    <div
      className={`${className} 
        ${breakpoint}-breakout 
        ${center ? "mx-auto" : ""} 
        ${padded ? "p-1" : ""} 
        ${rounded ? "br-10" : ""}`}
      {...props}
    >
      {children}
    </div>
  );
};
