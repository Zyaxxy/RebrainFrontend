import type { InputHTMLAttributes } from "react";

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    reference?: any;
}

export function InputBox({ reference, className, ...props }: InputBoxProps) {
    return (
        <div>
            <input
                ref={reference}
                className={`px-4 py-2 m-2 ${className || ""}`}
                {...props}
            />
        </div>
    )
}