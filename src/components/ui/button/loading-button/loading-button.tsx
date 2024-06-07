// react
import { ComponentProps } from "react";
// types
import { ButtonType } from "../button";
// icons
import { CgSpinner } from "react-icons/cg";
// css
import "../button.css";

// type
type LoadingButtonType = {
  loading: boolean;
  loadingText?: string;
} & ButtonType &
  ComponentProps<"button">;

// FC: Button
export const LoadingButton = ({
  loading = false,
  loadingText = "",
  className = "",
  variant = "primary",
  action = "primary",
  fullWidth = false,
  rippleEffect = true,
  textTransform = "capitalize",
  onClick,
  Icon,
  children,
  ...props
}: LoadingButtonType) => {
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
      } ui-button-with-icon tt-${textTransform}`}
      disabled={loading}
      onClick={(e) => {
        if (rippleEffect) createRipple(e);
        if (onClick) onClick(e);
      }}
      {...props}
    >
      {loading ? <CgSpinner className="ui-button-loading-spinner" /> : Icon}
      {loadingText && loading ? loadingText : children}
    </button>
  );
};
