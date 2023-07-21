import Image from "next/image";
import React from "react";
import { menuData } from "@/constants/data";

const Sidebar = () => {
  const menuItems: Menu[] = menuData;
  return (
    <div
      className="p-2 w-full md:w-[100px] md:h-screen
        items-center flex md:flex-col md:space-y-3
        shadow-md shadow-purple-400 bg-white
        sticky top-0 z-20 max-md:fixed max-md:hidden"
    >
      <Image src="/logo.png" alt="Logo" width={50} height={50} />
      {menuItems.map((item, idx) => (
        <svg
          key={idx}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 
          hover:text-purple-500 hover:bg-purple-100 
          p-2 cursor-pointer rounded-lg transition"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={item.logo} />
        </svg>
      ))}
    </div>
  );
};

export default Sidebar;
