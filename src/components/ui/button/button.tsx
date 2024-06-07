// react
import type { ComponentProps, ReactNode } from "react";
// types
import type {
  CSSTextTransform,
  ColorVariantsType,
  UserButtonActionsType,
} from "../../../types/common";
// css
import "./button.css";

// type
export type ButtonType = {
  className?: string;
  variant?: ColorVariantsType;
  action?: UserButtonActionsType;
  fullWidth?: boolean;
  rippleEffect?: boolean;
  Icon?: ReactNode;
  textTransform?: CSSTextTransform;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & ComponentProps<"button">;

// FC: Button
export const Button = ({
  className = "",
  variant = "primary",
  action = "primary",
  fullWidth = false,
  rippleEffect = true,
  Icon,
  onClick,
  children,
  ...props
}: ButtonType) => {
  const createRipple = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");

    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add("ripple-effect");
    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600); // Duration of the ripple animation
  };
  return (
    <button
      className={`${className} ui-button ui-button-${variant}-${action} ui-button-${variant}-${action}-hover ${
        fullWidth ? "" : "w-max-content"
      } ${Icon ? "ui-button-with-icon" : ""}`}
      {...props}
      onClick={(e) => {
        if (rippleEffect) {
          createRipple(e);
        }
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {Icon && Icon}
      {children}
    </button>
  );
};

// type
type ButtonPrimaryType = {
  className?: string;
} & ComponentProps<"button">;
// FC: ButtonPrimary
export const ButtonPrimary = ({
  className = "",
  children,
  ...props
}: ButtonPrimaryType) => {
  return (
    <button
      className={`${className} ui-button ui-button-primary-primary`}
      {...props}
    >
      {children}
    </button>
  );
};

// type
type ButtonSecondaryType = {
  className?: string;
} & ComponentProps<"button">;
// FC: ButtonSecondary
export const ButtonSecondary = ({
  className = "",
  children,
  ...props
}: ButtonSecondaryType) => {
  return (
    <button
      className={`${className} ui-button ui-button-secondary-primary`}
      {...props}
    >
      {children}
    </button>
  );
};

// type
type ButtonAccentType = {
  className?: string;
} & ComponentProps<"button">;
// FC: ButtonAccent
export const ButtonAccent = ({
  className = "",
  children,
  ...props
}: ButtonAccentType) => {
  return (
    <button
      className={`${className} ui-button ui-button-accent-primary`}
      {...props}
    >
      {children}
    </button>
  );
};
