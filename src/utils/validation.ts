import { Dispatch, SetStateAction } from "react";
import { InputValueType } from "../types/common";

// type
type ValidateInputRuleType = {
  regex: RegExp;
  errorMessage: string;
};
type ValidateInputType = {
  state: InputValueType;
  setState: Dispatch<SetStateAction<InputValueType>>;
  rules: ValidateInputRuleType[];
};

// does: validate input field
export function validateInput({ state, setState, rules }: ValidateInputType) {
  for (const rule of rules) {
    if (!rule.regex.test(state.value)) {
      setState((prevState) => ({
        ...prevState,
        error: true,
        errorMessage: rule.errorMessage,
      }));
      return false;
    }
  }
  setState((prevState) => ({
    ...prevState,
    error: false,
    errorMessage: "",
  }));
  return false;
}
