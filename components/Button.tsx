import { FC, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => { 
    return (
        <button className={twMerge("bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-medium rounded-full w-full hover:opacity-75 hover:text-black transition", className)} ref={ref}  disabled={disabled} type={type} {...props} >
            {children}
        </button>
    )
})

Button.displayName = "Button";

export default Button;