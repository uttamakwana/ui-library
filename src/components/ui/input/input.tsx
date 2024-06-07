// react
import { Dispatch, SetStateAction, useState, type ComponentProps } from "react";
// css
import "./input.css";
// types
import type {
  BorderStyles,
  CSSUnits,
  ColorVariantsType,
  CSSWeightsType,
  DisplayBreakpointType,
  InputValueType,
} from "../../../types/common";

// type
type SetInputValueType = Dispatch<SetStateAction<InputValueType>>;
type InputComponentType = {
  state: InputValueType;
  setState: SetInputValueType;
  className?: string;
  label?: string;
  variant?: ColorVariantsType;
  weight?: CSSWeightsType;
  borderWidth?: `${number}${CSSUnits}`;
  borderStyle?: BorderStyles;
  focusedVariant?: ColorVariantsType;
  focusedWeight?: CSSWeightsType;
  focusedBorderWidth?: `${number}${CSSUnits}`;
  focusedBorderStyle?: BorderStyles;
  breakpoint?: DisplayBreakpointType;
  validationFn?: () => boolean;
} & ComponentProps<"input">;

// FC: Input
export const Input = ({
  state,
  setState,
  className = "",
  label = "",
  variant = "white",
  weight = 400,
  borderWidth = "1px",
  borderStyle = "solid",
  focusedVariant = "black",
  focusedWeight = 400,
  focusedBorderWidth = "1px",
  focusedBorderStyle = "solid",
  breakpoint = "auto",
  validationFn,
  type,
  ...props
}: InputComponentType) => {
  // State
  const [labelVariant, setLabelVariant] = useState<ColorVariantsType>("black");
  const [labelWeight, setLabelWeight] = useState<CSSWeightsType>(900);
  // variables
  const inputBorder = `${borderWidth} ${borderStyle} var(--clr-${variant}-${weight})`;
  const focusedBorder = `${focusedBorderWidth} ${focusedBorderStyle} var(--clr-${focusedVariant}-${focusedWeight})`;

  // does: handle the focus event on input
  function handleFocus(e: React.FocusEvent<HTMLInputElement, Element>) {
    e.target.style.border = focusedBorder;
    setLabelVariant(focusedVariant);
    setLabelWeight(focusedWeight);
  }

  // does: handle the blur event on input
  function handleBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
    // normal validation
    if (
      e.target.value === "" ||
      e.target.value === undefined ||
      e.target.value == null
    ) {
      e.target.style.border = `1px solid var(--clr-danger-400)`;
      setLabelVariant("danger");
      setLabelWeight(400);
      return setState((prevState) => {
        return {
          ...prevState,
          error: true,
          errorMessage: `${label} is required!`,
        };
      });
    }
    if (validationFn) {
      if (!validationFn()) {
        setLabelVariant("danger");
        setLabelWeight(400);
        e.target.style.border = `1px solid var(--clr-danger-400)`;
        return;
      }
    }
    setLabelVariant("black");
    setLabelWeight(900);
    e.target.style.border = inputBorder;
  }

  // does: handle the change event on input
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    // Reject input if it contains non-numeric characters
    if (type === "tel" && !/^[0-9]*$/.test(newValue)) {
      return; // Limit to 10 digits
    }
    setState((prevState) => {
      return {
        ...prevState,
        value: e.target.value,
      };
    });
  }

  // return component
  return (
    <div className="ui-input-with-error">
      <div className="ui-input-container">
        <input
          className={`${className} ui-input ui-input-${variant} ${breakpoint}-breakout ${
            state.value ? "active" : ""
          }`}
          style={{
            border: inputBorder,
          }}
          value={state.value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {label && (
          <label
            className={`ui-input-label bg-white-950 text-${labelVariant}-${labelWeight}`}
          >
            {label}
          </label>
        )}
      </div>
      {state.error && (
        <p className="ui-input-error text-danger-400">{state.errorMessage}</p>
      )}
    </div>
  );
};
