// different types of color variant
// primary, secondary, accent for the project | 12 primary colors | supplementary colors | neutral colors
export type ColorVariantsType =
  | "primary"
  | "secondary"
  | "accent"
  | "white"
  | "black"
  | "gray"
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "azure"
  | "magenta"
  | "rose"
  | "violet"
  | "cyan"
  | "spring-green"
  | "chartreuse-green"
  | "orange"
  | "success"
  | "warning"
  | "info"
  | "danger";

// user button action
export type UserButtonActionsType = "primary" | "secondary" | "tertiary";

// display breakpoint
export type DisplayBreakpointType =
  | "small-mobile"
  | "mobile"
  | "tablet"
  | "laptop"
  | "desktop"
  | "large screen"
  | "auto";

// 100 to 900
export type CSSWeightsType =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

// border styles
export type BorderStyles =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

// CSS units
export type CSSUnits =
  | "px"
  | "em"
  | "rem"
  | "vw"
  | "vh"
  | "%"
  | "cm"
  | "mm"
  | "in"
  | "pt"
  | "pc"
  | "ex"
  | "ch";

// input value type
export type InputValueType = {
  value: string;
  error: boolean;
  errorMessage: string;
};

// CSS text transform properties
export type CSSTextTransform =
  | "lowercase"
  | "capitalize"
  | "uppercase"
  | "none"
  | "inherit"
  | "initial";
