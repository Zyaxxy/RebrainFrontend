import { type ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement; 
  endIcon?: ReactElement;
  onClick?: () => void;
  loading?: boolean;
}

const variantStyles: Record<ButtonProps["variant"], string> = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-100 text-purple-600",
};

  

const defaultStyles = "rounded-md px-4 py-2 m-2 text-sm flex jutify-center items-center gap-.5 font-semibold cursor-pointer";

export const Button = (props: ButtonProps) => {
  const { variant, text , startIcon, endIcon, onClick , loading } = props;

  return (
    <button onClick = {onClick}
      className={`${variantStyles[variant]} ${defaultStyles} +${loading ? " opacity-50" : ""}`} disabled={loading}>
        {startIcon? <div className= "pr-2">{ startIcon }</div> : null}
        {text} 
        {endIcon? <div className= "pl-2">{ endIcon }</div> : null} 
    </button> 
  );
};

