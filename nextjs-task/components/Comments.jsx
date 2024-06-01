import Image from "next/image";
import Link from "next/link";
import React from "react";

const Comments = () => {
  return (
    <Link
      href="/blogs/1"
      className="flex flex-col cursor-pointer comment-section mt-8">
      <div className="bg-white shadow-md  rounded-lg p-4 ml-14 mb-4 border border-blue-500">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              A
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              Abhishek Soam
            </div>
            <div className="text-sm text-gray-500">2 hours ago</div>
          </div>
          <div className="ml-auto flex justify-between  text-gray-500">
            <span className="mt-2 mr-2">
              <Image src={"/svg/eye.svg"} alt={"logo"} width={15} height={15} />
            </span>
            125
          </div>
        </div>
        <div className="mt-2">
          <h2 className="text-lg font-semibold text-gray-900">
            Mains Preparation Strategy
          </h2>
          <p
            className="text-gray-700 mt-1"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "1000px",
            }}>
            Crafting an effective strategy for the UPSC mains examination is
            pivotal for success. Firstly, a thorough understanding of the
            extensive syllabus is essential.             
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex space-x-4 bg-gray-50 rounded-2xl p-2 text-gray-500 text-sm">
            <button className="flex items-center text-black font-semibold  hover:opacity-60">
              <Image
                src={"/svg/upvote.svg"}
                alt={"logo"}
                width={16}
                height={16}
                className="mr-1 "
              />
              100
            </button>
            <div className="border-r border-gray-300"></div>
            <button className="flex items-center text-black font-semibold  hover:opacity-60">
              <Image
                src={"/svg/downvote.svg"}
                alt={"logo"}
                width={16}
                height={16}
                className="mr-1 "
              />
              13
            </button>
            <div className="border-r border-gray-300"></div>
            <button className="flex items-center text-black font-semibold  hover:opacity-60">
              <Image
                src={"/svg/comments.svg"}
                alt={"logo"}
                width={16}
                height={16}
                className="mr-1 "
              />
              25
            </button>
          </div>
          <span className="text-sm text-red-500">New comment 5 min ago</span>

          <div className="mt-2 flex space-x-2">
            <button className="flame-bg text-[#FC8026] border border-[#FC8026] text-sm font-medium px-2 py-1 rounded-full hover:opacity-80">
              Strategy
            </button>
            <button className="flame-bg text-[#FC8026] border border-[#FC8026] text-sm font-medium px-2 py-1 rounded-full  hover:opacity-80">
              Preparation
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Comments;
