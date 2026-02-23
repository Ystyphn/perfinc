import Link from "next/link";
import { logOut } from "@/app/dashboard/logout";
import { LuLogOut } from "react-icons/lu";

import type { Navlink } from "./navbar";


export function Drawer ({active = false}: {active?: boolean}) { // Drawer Component
  const navLinks: Navlink[] = [
    {
      linkName: "Profile",
      href: "#",
    }
  ]

  return (
    <div 
      className={active ? "min-w-[120px] absolute h-fit z-11 px-2 py-1 bg-black flex flex-col gap-2 transition-[height] duration-600 top-full right-0" :
        "h-[0px] absolute transition-[height] duration-600 overflow-hidden"
      }
    >
      {/* Navlinks */}
      <ul className="flex flex-row list-none gap-2">
        {navLinks.map((item: Navlink, index: number) => (
          <Link 
            key={index}
            href={item.href}
            className="font-quantico text-offwhite hover:text-offwhite text-sm"
          >
            {item.linkName}
          </Link>
        ))}
      </ul>
      
      {/* Divider */}
      <div className="border-b-1 border-offwhite" />
      <form
        action={() => logOut()}
      >
        <button 
          className="font-quantico text-red-500 hover:text-red-500/75 flex flex-row items-center gap-1 cursor-pointer"
        >
          Log out
          <LuLogOut />
        </button>
      </form>
    </div>
  )
}