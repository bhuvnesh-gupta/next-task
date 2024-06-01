// components/Header.js
import React from "react";
import "../assets/styles/globals.css";
import { FaChevronDown } from "react-icons/fa6";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className="header sticky top-0 z-[99] bg-slate-50/60 backdrop-blur-sm"
      height={73}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8   ">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-lg font-semibold">Welcome Abhishek!</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                className="bg-white border-2 border-orange-200 rounded-full py-2 px-5"
                width={74}
                height={34}>
                <span className="text-black m-1 ">🔥 2</span>
              </button>
            </div>
            <button
              className="bg-white border border-blue-700 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600"
              width={163}
              height={35}>
              Explore Community
            </button>
            <button className="flex justify-between bg-gradient-to-r w-56 from-blue-700 to-sky-500 hover:to-blue-400 text-white px-3 py-2 rounded-md text-sm font-medium ">
              Polity
              <FaChevronDown clas width={16} height={16} />
            </button>
            <div className="relative">
              <button className=" rounded-full p-2">
                <Image
                  src={"/svg/call chat.svg"}
                  alt={"logo"}
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Header;
