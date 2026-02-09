'use client'
import Link from "next/link"
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, TrendingUp, CreditCard, ChartPie } from "lucide-react"
import { useState } from "react";

import type { LucideIcon } from "lucide-react";


export interface Navlink{
  linkName: string;
  href: string
  icon?: LucideIcon,
  current?: boolean
}


interface NavbarProps{
  navLinks: Navlink[],
}


const iconMap: Record<string, LucideIcon> = {
  "wallet": Wallet,
  "trendingUp": TrendingUp,
  "creditCard": CreditCard,
  "chartPie": ChartPie
}


function LogoIcon(){
  return (
  <svg
    width="2em"
    height="2em"
    viewBox="0 0 350 350"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: "drop-shadow(0px 0px 4px cyan) drop-shadow(0px 0px 8px teal)"
    }}
  >
    <path
      d="M124.196 118.051C127.941 105.708 125 100.661 125 100.661C125 100.661 124.222 107.702 124.196 118.051ZM124.196 118.051C121.216 127.876 113.999 142.324 97.6909 162.529C87.178 175.554 53.1944 182.067 43.6594 162.529C34.1245 142.992 43.6594 108.116 62.7294 95.7766C97.1427 73.5091 158.079 71.3549 200.986 100.661C209.357 106.378 214.571 113.348 217.444 121.202M124.196 118.051C124.137 141.951 128.09 183.495 154.901 196.72C175.56 206.911 209.143 168.819 215.5 133C216.247 128.791 216.887 124.87 217.444 121.202M217.444 121.202C232.36 161.987 184.114 226.612 186.684 263.473C189.749 307.432 232.77 325.341 253.429 294.407C274.088 263.473 235.948 250.448 221.645 269.985M217.444 121.202C222.237 89.6516 220.946 76.7866 229.591 59.9581C245.483 29.0239 300.133 36.0203 309.049 66.4705C316.201 90.8925 277.266 129.967 264.553 95.7766M110.437 240.436H183.437V243.436H107.437V153.436H110.437V240.436ZM243.437 243.436H197.437V240.436H240.437V110.436H220.437V107.436H243.437V243.436ZM119.437 110.436H110.437V139.436H107.437V107.436H119.437V110.436ZM209.437 110.436H130.437V107.436H209.437V110.436ZM39.4795 159.198L23.6787 175L175 326.321L199.663 301.657L201.784 303.778L175 330.563L19.4365 175L37.3584 157.077L39.4795 159.198ZM330.563 175L247.784 257.779L245.663 255.658L326.321 175L271.35 120.028L273.471 117.907L330.563 175ZM223.036 67.4726L220.915 69.5937L175 23.6787L121.83 76.8476L119.709 74.7265L175 19.4365L223.036 67.4726Z"
      stroke="cyan"
      strokeWidth={4}
    />
  </svg>
  );
}


export function LogoComponent(){
  return(
  <div className="flex grow-2">
    <div className="p-2 pe-0 text-xl">
      <LogoIcon/>
    </div>
    <div className="py-2 flex flex-col">
      <h5 className="text-sm font-jersey-25 leading-none">PerFinc</h5>
    </div>
  </div>
  )
}


export function Navbar({navLinks}: NavbarProps){
  const [drawerVisible, setDrawerVisible] = useState(false)


  return (
  <nav className="w-full h-[54px] relative flex flex-row border-b-[0.5px] border-[#cccccc] px-4 max-md:px-0 items-center">
    {/*Logo Section*/}
    <div className="flex grow-2">
      <div className="p-2 pe-0 text-xl">
        <LogoIcon/>
      </div>
      <div className="py-2 flex flex-col items-center">
        <h5 className="text-sm font-jersey-25 leading-none">YstyphnCodez's</h5>
        <h5 className="text-xl font-audiowide leading-none">
          <span className="bg-linear-to-r from-cyan-300 via-teal-300 to-lime-300 bg-clip-text text-transparent">PerFinc</span>
        </h5>
      </div>
    </div>

    {/*Navlinks section (Desktop)*/}
    <div className="max-md:hidden">
      <ul className="px-4 pe-8 size-full flex flex-row gap-12 items-center">
        {navLinks.map((item, index) => {
          const Icon = item.icon ? iconMap[item.icon] : null;

          return (
          <Link key={index} href={item.href} 
            className="font-quantico text-[#cccccc] transition-[color] duration-600 hover:text-cyan-300 flex gap-2"
          >
            <Icon/>
            {item.linkName}
          </Link>
          );
          }, iconMap)
        }

        {/* Profile Button */}
      </ul>
    </div>

    {/*Navlinks section (Tablet and Mobile)*/}
    <div className="h-full pe-4 flex items-center md:hidden">
      <button onClick={() => setDrawerVisible(true)}>
          <Menu/>
      </button>
    </div>

    {/*Overlay drawer*/}
      <AnimatePresence initial={true}>
        { drawerVisible &&
        <motion.div 
          className="w-full min-h-screen z-10 p-4 bg-black absolute top-0 right-0 flex flex-col"
          initial = {{x: window.innerWidth}}
          animate = {{x: 0}}
          exit={{x: window.innerWidth}}
          transition={{duration: 0.3}}
        >
          <div className="relative gap-5 flex flex-col">
            <button 
              className="absolute top-0 right-0"
              onClick={() => setDrawerVisible(false)}
            >
              <X/>
            </button>

            <LogoComponent/>

            <ul className="px-4 pe-8 size-full flex flex-col gap-6">
              {navLinks.map((item, index) => {
                const Icon = item.icon ? iconMap[item.icon] : null;

                return (
                <Link key={index} href={item.href} 
                  className="font-quantico text-[#cccccc] transition-[color] duration-600 hover:text-theme-red flex gap-2"
                >
                  <Icon/>
                  {item.linkName}
                </Link>
                );
                }, iconMap)
              }
            </ul>
          </div>
        </motion.div>
        }
      </AnimatePresence>
  </nav>
  )
}