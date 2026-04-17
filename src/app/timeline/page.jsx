"use client";

import { Context } from "@/provider/ContextProvider";
import Image from "next/image";
import React, { useContext, useState } from "react";

const page = () => {
  const [remember, setRemember] = useContext(Context);
    console.log(remember);
const [sortType,setSortType]=useState("")
const haldleSort=()=>{
const sorted = [...remember].sort((a, b) =>
    a.type.toLowerCase().localeCompare(b.type.toLowerCase())
  );
  setRemember(sorted);
  // console.log(sortArray,"dort array")
}
console.log(sortType)
  return (
    <div className=" space-y-10 ">
      {remember.length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          {" "}
          <h1 className="text-4xl font-bold text-red-500 text-center">
            there is no data!!!!!!!!!!!
          </h1>
        </div>
      ) : (
        <div className="py-20 px-5 bg-base-100 space-y-10">
          <h1 className="text-2xl font-bold">Time LIne</h1>
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={haldleSort}>Sort By Title</a>
              </li>
              
            </ul>
          </div>
          {remember.map((log, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg p-5 bg-base-200 flex gap-5"
            >
              <Image
                src={log?.image}
                alt={log?.name}
                height={50}
                width={50}
              ></Image>
              <div className="">
                <h1 className="text-xl  text-gray-500">
                  <span className="font-bold">{log.type}</span> with {log.name}
                </h1>
                <h1 className="text-gray-400">Time: {log.time}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
