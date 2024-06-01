"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

import { Comment } from "@/components/Comment";

const COMMENTS = [
  {
    id: 1,
    author: "Rajat Jain",
    authorInitial: "R",
    text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
    time: "12:15 Today",
    likes: 100,
    unliked: 13,
    replies: [
      {
        id: 2,
        author: "Abhishek Soam",
        authorInitial: "A",
        text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
        time: "12:16 Today",
        likes: 100,
        unliked: 13,
        replies: [
          {
            id: 3,
            author: "Rishi Bajpai",
            authorInitial: "R",
            text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
            time: "12:17 Today",
            likes: 100,
            unliked: 13,
            replies: [],
          },
        ],
      },
      {
        id: 4,
        author: "Abhishek Soam",
        authorInitial: "A",
        text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
        time: "12:18 Today",
        likes: 100,
        unliked: 13,
        replies: [],
      },
    ],
  },
  {
    id: 2,
    author: "Rajat Jain",
    authorInitial: "R",
    text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
    time: "12:15 Today",
    likes: 100,
    unliked: 13,
    replies: [
      {
        id: 2,
        author: "Abhishek Soam",
        authorInitial: "A",
        text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
        time: "12:16 Today",
        likes: 100,
        unliked: 13,
        replies: [
          {
            id: 3,
            author: "Rishi Bajpai",
            authorInitial: "R",
            text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
            time: "12:17 Today",
            likes: 100,
            unliked: 13,
            replies: [],
          },
        ],
      },
      {
        id: 4,
        author: "Abhishek Soam",
        authorInitial: "A",
        text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
        time: "12:18 Today",
        likes: 100,
        unliked: 13,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    author: "Rajat Jain",
    authorInitial: "R",
    text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
    time: "12:15 Today",
    likes: 100,
    unliked: 13,
    replies: [
      {
        id: 2,
        author: "Abhishek Soam",
        authorInitial: "A",
        text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
        time: "12:16 Today",
        likes: 100,
        unliked: 13,
        replies: [
          {
            id: 3,
            author: "Rishi Bajpai",
            authorInitial: "R",
            text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
            time: "12:17 Today",
            likes: 100,
            unliked: 13,
            replies: [],
          },
        ],
      },
      {
        id: 4,
        author: "Abhishek Soam",
        authorInitial: "A",
        text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
        time: "12:18 Today",
        likes: 100,
        unliked: 13,
        replies: [],
      },
    ],
  },
  {
    id: 4,
    author: "Rajat Jain",
    authorInitial: "R",
    text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
    time: "12:15 Today",
    likes: 100,
    unliked: 13,
    replies: [
      {
        id: 2,
        author: "Abhishek Soam",
        authorInitial: "A",
        text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
        time: "12:16 Today",
        likes: 100,
        unliked: 13,
        replies: [
          {
            id: 3,
            author: "Rishi Bajpai",
            authorInitial: "R",
            text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
            time: "12:17 Today",
            likes: 100,
            unliked: 13,
            replies: [],
          },
        ],
      },
      {
        id: 4,
        author: "Abhishek Soam",
        authorInitial: "A",
        text: "The fundamental rights guaranteed by the Indian Constitution are the basic rights that are essential for the development and well-being of individuals.",
        time: "12:18 Today",
        likes: 100,
        unliked: 13,
        replies: [],
      },
    ],
  },
];

const BlogDetailPage = () => {
  const [selectedId, setSelectedId] = useState(1);

  const handleCommentSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex items-center mb-4">
          <button className="text-gray-600 mr-2 text-sm hover:text-black">
            <Link className="flex justify-between" href="/blogs">
              <span>
                <FaChevronLeft className="mt-1 mr-2" />
              </span>
              Back
            </Link>
          </button>
        </div>

        <div className="flex items-center mb-4">
          <div className="bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold">
            A
          </div>
          <div className="ml-3">
            <div className="text-gray-800 font-semibold">Abhishek Soam</div>
            <div className="text-gray-500 text-sm">3 hours ago</div>
          </div>
        </div>

        <div className="mb-4">
          <h1 className="text-xl font-bold mb-2">Mains Preparation Strategy</h1>
          <p className="text-gray-700 mb-4">
            Crafting an effective strategy for the UPSC mains examination is
            pivotal for success. Firstly, a thorough understanding of the
            extensive syllabus is essential. By dissecting each subject's
            syllabus meticulously, you can grasp the breadth and depth of topics
            covered, aiding in targeted preparation. Prioritizing subjects based
            on individual strengths and weaknesses is crucial. Allocate study
            time judiciously, focusing more on challenging subjects while
            ensuring comprehensive coverage of all topics. Equally important is
            the selection of high-quality study material. Opt for standard
            textbooks, reference books, and reputable online resources that
            comprehensively cover the syllabus.
          </p>
          <div className="mb-4 flex flex-col">
            <Image
              src={"/svg/pdf image.svg"}
              alt={"logo"}
              width={201}
              height={164}
              className="mr-1"
            />
            <div className="flex  bg-[#F5F9FF] w-[201px]">
              <Image
                src={"/svg/pdf-icon.svg"}
                alt={"logo"}
                width={24}
                height={24}
                className="m-1 ml-2"
              />
              <span className="m-1 font-medium text-[#0D0D0D]"> Notes.pdf</span>
            </div>
          </div>
          <div className="flex space-x-4 bg-gray-50 rounded-2xl p-2 mt-9 text-gray-500 text-sm w-40">
            <button className="flex items-center text-black font-semibold  hover:opacity-60">
              <Image
                src={"/svg/upvote.svg"}
                alt={"logo"}
                width={16}
                height={16}
                className="mr-1 "
              />{" "}
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
                src={"/svg/Save.svg"}
                alt={"logo"}
                width={16}
                height={16}
                className="mr-1 "
              />
            </button>
          </div>
        </div>

        <div>
          <div className="flex justify-between mt-7">
            <h2 className="text-lg font-semibold mb-2">Comments</h2>
            <div className="flex items-center bg-[#f9f9f9] rounded-[5px] text-lg font-semibold mb-2 px-2 py-1">
              <span>
                <Image
                  src={"/svg/replies.svg"}
                  alt={"logo"}
                  width={16}
                  height={16}
                  className="mr-2 mt-1  "
                />
              </span>
              <span className="font-semibold text-xs">Comments</span>
            </div>
          </div>

          {COMMENTS.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              isSelected={selectedId === comment.id}
              onClick={handleCommentSelect}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
