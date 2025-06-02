interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

import { twMerge } from "tailwind-merge";

const Box = ({children, className}: BoxProps) => {
    return (
        <div className={twMerge("bg-neutral-900 rounded-lg h-fit w-full", className)}> 
            {children}
        </div>
    )
}

export default Box