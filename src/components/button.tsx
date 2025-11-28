import { type ReactElement } from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  loading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { variant, text, startIcon, endIcon, onClick, loading } = props;

  return (
    <ShadcnButton
      variant={variant === "primary" ? "default" : "secondary"}
      size={props.size === "md" ? "default" : props.size}
      onClick={onClick}
      disabled={loading}
      className="gap-2"
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!loading && startIcon}
      {text}
      {!loading && endIcon}
    </ShadcnButton>
  );
};

