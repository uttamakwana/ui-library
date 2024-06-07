import { ComponentProps } from "react";

// type
type MainType = {
  className?: string;
} & ComponentProps<"main">;

// FC: Main
const Main = ({ className = "", children, ...props }: MainType) => {
  return (
    <main className={`${className}`} {...props}>
      {children}
    </main>
  );
};

export default Main;
