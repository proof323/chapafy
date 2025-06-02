"use client";
import { TbPlaylist } from "react-icons/tb";
import {  AiOutlinePlus } from "react-icons/ai";

const Library = () => {
    const onClick = () => {
        
    }
    return (
        <div onClick={onClick} className="flex flex-col">
            <div className="flex items-center justify-between px-5 py-4">
                <div className="
                inline-flex items-center gap-x-2
                ">
                    <TbPlaylist className="text-neutral-400" size={26} color=""/>
                    <p className="text-md font-medium text-neutral-400 hover:text-white">
                        Canciones
                    </p>

                </div>
                <AiOutlinePlus size={20} onClick={onClick} className=" text-neutral-400 hover:text-white cursor-pointer transition"/>
            
            </div>
            <div className="flex flex-col gap-y-2 px-3 mt-4">
                Lista papa

            </div>
        </div>
    )
}

export default Library