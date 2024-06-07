// react
import { useState } from "react";
// types
import type { InputValueType } from "../types/common";

// type
type UseInputStateType = {
  value?: string;
  error?: boolean;
  errorMessage: string;
};

// does: custom hook to create custom input state
export function useInputState({
  value = "",
  error = false,
  errorMessage,
}: UseInputStateType): [
  InputValueType,
  React.Dispatch<React.SetStateAction<InputValueType>>
] {
  const [state, setState] = useState<InputValueType>(() => {
    return {
      value,
      error,
      errorMessage,
    };
  });

  return [state, setState];
}
