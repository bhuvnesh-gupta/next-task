"use client";

import Image from "next/image";
import { useState } from "react";

export function Comment({ comment, isSelected, onClick }) {
  const [showReplies, setShowReplies] = useState(false);

  const background = isSelected ? "bg-white shadow-md" : "bg-[#014EE60D]/5";

  return (
    <div
      className={`cursor-pointer mb-6 p-4 rounded-[10px] ${background}`}
      onClick={() => onClick?.(comment.id)}>
      <div className="flex items-start mb-2">
        <div className="bg-orange-400 w-8 h-8 px-3 rounded-full flex items-center justify-center text-white text-sm font-bold">
          {comment.authorInitial}
        </div>
        <div className="ml-3">
          <div className="text-gray-800 font-semibold">{comment.author}</div>
          <div className="text-gray-500 text-sm">{comment.time}</div>
          <div className="text-gray-700 mt-1">{comment.text}</div>
          <div className="flex space-x-4 text-gray-500 mt-2">
            <div className="flex space-x-4 bg-gray-50 rounded-2xl p-2 text-gray-500 text-sm w-auto">
              <button className="flex items-center text-black font-semibold  hover:opacity-60">
                <Image
                  src={"/svg/upvote.svg"}
                  alt={"logo"}
                  width={16}
                  height={16}
                  className="mr-1 "
                />
                {comment.likes}
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
                {comment.unliked}
              </button>
            </div>
            <div className="flex items-center">
              <button className="flex items-center text-black font-semibold  hover:opacity-60">
                <Image
                  src={"/svg/addcomment.svg"}
                  alt={"logo"}
                  width={16}
                  height={16}
                  className="mr-1 "
                />
                Reply
              </button>
            </div>
            {comment.replies.length > 0 && (
              <div className="flex items-center">
                <button
                  className="flex items-center text-black font-semibold  hover:opacity-60"
                  onClick={() => setShowReplies(!showReplies)}>
                  <Image
                    src={"/svg/replies.svg"}
                    alt={"logo"}
                    width={16}
                    height={16}
                    className="mr-1 "
                  />
                  {showReplies ? "Hide" : "Show"} {comment.replies.length}{" "}
                  Replies
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {showReplies && isSelected && (
        <div className="ml-10 ">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} isSelected={isSelected} />
          ))}
        </div>
      )}
    </div>
  );
}
