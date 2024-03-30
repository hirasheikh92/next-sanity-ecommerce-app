"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import navLinks from "./navLinks";
import { usePathname } from "next/navigation";
import {HiMenuAlt2} from 'react-icons/hi';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const path = usePathname()
 
  return (
    <header className="w-full h-20 bg-white border-b-[1px] border-b-gray-400 ">
      <div className="h-full max-w-screen-xl mx-auto px-4 xl:px-0  flex items-center justify-between gap-2">
        <Link href={"/"}>
          <strong className="text-2xl font-bold ">ESHOP</strong>
        </Link>
        <div className="relative w-full hidden lg:inline-flex items-center justify-between px-6 rounded-md gap-2 lg:w-[600px] h-10 text-base text-primeColor border-[1px] border-black ">
          <input
            type="text"
            placeholder="Search Your Products here"
            className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-600"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          {searchQuery ? (
            <IoCloseOutline onClick={()=>setSearchQuery("")}  className="w-5 h-5 hover:cursor-pointer hover:text-red-500 duration-200" />
          ) : (
            <FaSearch className="w-5 h-5 hover:cursor-pointer" />
          )}
        </div>
        <nav className="hidden md:inline-flex items-center gap-2">
            {navLinks.map((item)=>(
                <Link href={item.path}
                className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 md:border-r-[2px] border-r-gray-500 duration-200 last:border-r-0 ${path === item?.path && "text-gray-950 font-bold underline" }`} key={item.id}>
                    <ul >
                        <li >  {item?.title}</li>
                    </ul>
                  
                </Link>
            ))}
        </nav>
        <HiMenuAlt2  className=" inline-flex md:hidden cursor-pointer w-8 h-6"/>
      </div>
    </header>
  );
};

export default Header;
