import { ComponentProps } from "react";

// type
type SectionType = {
  className?: string;
} & ComponentProps<"section">;

// FC: Section
const Section = ({ className = "", children, ...props }: SectionType) => {
  return (
    <section className={`${className}`} {...props}>
      {children}
    </section>
  );
};

export default Section;
