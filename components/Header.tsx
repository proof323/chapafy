
"use client"
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome, HiSearch } from "react-icons/hi";
import Button from "./Button";
interface IProps {
    children: React.ReactNode;
    className?: string;
}
const Header = ({children, className}: IProps) => {
    const router = useRouter();
    const handleLogout = () => {
        
    } 
    return (
        <div className={twMerge("h-fit  bg-gradient-to-b from-emerald-800  p-6", className)}>
            <div className="flex items-center justify-between w-full mb-4">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition cursor-pointer" onClick={() => router.back()}>
                        <RxCaretLeft size={36} color="white"/>
                    </button>
                    
                    <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition cursor-pointer" onClick={() => router.forward()}>
                        <RxCaretRight size={36} color="white"/>
                    </button>
                    
                </div>
                <div className="flex md:hidden items-center gap-x-2">
                    <button className="rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center hover:opacity-75 p-2 transition ">
                        <HiHome className="text-black" size={20}/>
                        
                    </button>
                    <button className="rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center hover:opacity-75 p-2 transition ">
                        <HiSearch className="text-black" size={20}/>
                        
                    </button>
                </div>
                <div className="flex items-center gap-x-4 justify-between">
                    <>
                    <div>
                        <Button className="bg-transparent text-neutral-300 font-medium">
                            Sign up
                        </Button>
                    </div>
                    <div>
                        <Button className="bg-white px-6 py-2 text-black">
                            login
                        </Button>
                    </div>
                    
                    </>
                    
                </div>
            </div>
         {children}
        </div>
    );
}
export default Header;
