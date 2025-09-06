import { type ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement; 
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles: Record<ButtonProps["variant"], string> = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-500 text-white",
};



const defaultStyles = "rounded-md px-4 py-2 flex items-center gap-2";

export const Button = (props: ButtonProps) => {
  const { variant, text , startIcon, endIcon } = props;

  return (
    <button
      className={`${variantStyles[variant]} ${defaultStyles}`}>
        {startIcon? <div className= "pr-2">{ startIcon }</div> : null}
        {text} 
        {endIcon? <div className= "pl-2">{ endIcon }</div> : null}
    </button>
  );
};

