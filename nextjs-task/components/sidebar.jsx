// components/Sidebar.js
"use client";

import React from "react";
import "../assets/styles/globals.css";
import Image from "next/image";
// import { FaAngleRight } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className=" top-0 left-0 flex flex-col items-center bg-white shadow-md p-4 sidebar fixed w-[80px]">
      <div className="mb-8">
        <Image src={"/svg/logo.svg"} alt={"logo"} width={32} height={32} />
      </div>
      <div className="divider-reverse"></div>
      <div className="flex flex-col space-y-4">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Image
            src={"/svg/Questionmark.svg"}
            alt={"logo"}
            width={24}
            height={24}
          />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Image src={"/svg/Todo.svg"} alt={"logo"} width={24} height={24} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Image src={"/svg/Note.svg"} alt={"logo"} width={24} height={24} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Image
            src={"/svg/BusinessStatistics.svg"}
            alt={"logo"}
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="flex flex-col mt-auto space-y-4">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Image
            src={"/svg/Filesend.svg"}
            alt={"logo"}
            width={44}
            height={44}
          />
        </button>
        <div className="divider"></div>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <Image src={"/svg/Profile.svg"} alt={"logo"} width={40} height={40} />
        </button>
      </div>
      {/* <div className="absolute top-[50%] right-[-18px] translate-y-[-50%] h-[80px]">
        <span className="shadow-lg bg-white h-full flex items-center rounded-r-[40px]">
          <FaAngleRight fill="#014EE6" size={18} />
        </span>
      </div> */}
    </div>
  );
};

export default Sidebar;
