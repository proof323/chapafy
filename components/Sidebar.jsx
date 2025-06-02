"use client";
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { HiHome, HiSearch } from "react-icons/hi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

const Sidebar = ({children}) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icon: HiHome, 
            label: "Home",
            active:pathname != "/search",
            href: "/"
        },
        {
            icon: HiSearch,
            label: "Search",
            active:pathname == "/search",
            href: "/search"
        }
    ], [pathname]);
        return (
        <div className='flex h-full'>
            <div className="hidden md:flex flex-col gap-y-2 h-full bg-black w-[300px] p-2">
                <Box>
                     <div className='flex flex-col gap-y-4 px-5 py-4'>
                        {routes.map((route) => (
                            <SidebarItem key={route.label} {...route} />
                        ))}
                     </div>
                </Box>
                <Box className="h-full overflow-y-auto text-center p-2 font-semibold">
                    <Library    >
                        Canciones
                    </Library>
                </Box>

            </div>
            <main className='h-full overflow-y-auto flex-1 py-2'> 
                {children}
            </main>
        </div>
    )
}
export default Sidebar;
