"use client"
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const NavBar = () => {
  const pathname=usePathname()
  console.log("path names   ",pathname)
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <h1 className=" text-2xl font-bold text-[#244D3F]">KeenKeeper</h1>
      </div>

      <div className="flex-none">
        <div className="menu menu-horizontal  text-center px-1 hidden md:flex md:justify-center md:items-center space-y-3">
          <Link
            href={"/"}
            className="text-lg text-gray-500 font-semibold  mr-5 flex gap-1 items-center justify-center"
          >
            <IoMdHome />
            Home
          </Link>
          <Link
            href={"/timeline"}
            className="text-lg text-gray-500 font-semibold  mr-5 flex gap-1 items-center justify-center"
          >
            <MdOutlineAccessTimeFilled />
            TimeLine
          </Link>
          <Link
            href={"/statuss"}
            className="text-lg text-gray-500 font-semibold  mr-5 flex gap-1 items-center justify-center"
          >
            <FaChartLine />
            Status
          </Link>
        </div>
        <div className=" flex mr-3 md:hidden">
          
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              <CiMenuFries />
            </div>
            <div 
              tabIndex="-1"
              className="dropdown-content grid grid-rows-3 gap-4 text-right max-w-[150px]  bg-base-200 rounded-lg z-1 w-52 p-2 shadow-md"
            >
               <Link
            href={"/"}
            className="text-lg text-gray-500 font-semibold  "
          >
            Home
          </Link>
          <Link
            href={"/timeline"}
            className="text-lg text-gray-500 font-semibold  "
          >
            TimeLine
          </Link>
          <Link
            href={"/st"}
            className="text-lg text-gray-500 font-semibold  "
          >
            Status
          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
