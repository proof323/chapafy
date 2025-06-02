
import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType;
    label: string;  
    active?: boolean;
    href: string;
}

const SidebarItem = ({icon:Icon, label, active, href}: SidebarItemProps) => {
    return (
        <Link href={href}>
            <div className={twMerge("flex flex-row items-center w-full gap-x-4 text-md font-medium hover:text-white transition text-neutral-400 cursor-pointer" ,active && "text-white")}>
                <Icon size={26} color=""/>
                <p className="truncate w-full" >{label}</p>
            </div>
        </Link>
    )
}
export default SidebarItem