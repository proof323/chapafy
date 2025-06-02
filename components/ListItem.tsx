
"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
interface IListItemProps {
    image: string;
    name: string;
    href: string;
};

export const ListItem: FC<IListItemProps> = ({image, name, href}) => {
    const router = useRouter();
    const onClick = () => {
        // autentificacion mi king
        router.push(href);
    }
    return (
        <button className="relative group flex items-center rounded-md overflow-hidden bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4" onClick={onClick}>
            <div className="relative min-h-[64px] min-w-[64px]">
               <Image src={image} alt={name} fill className="object-cover"/>
            </div>
            <p className="pl-4 font-medium text-white truncate py-5">
                {name}
            </p>
            <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md group-hover:opacity-100 cursor-pointer right-5 hover:scale-110">
                <FaPlay className="text-black"/>
            </div>
        </button>
    );
}
