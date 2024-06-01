"use client";

import Comments from "@/components/Comments";
import TagsSection from "@/components/TagsSection";
import Image from "next/image";
import React, { useState } from "react";

const FILTER_LIST = [
  { value: "ALL", label: "All" },
  { value: "PREPARATION", label: "Preparation Strategy" },
  { value: "INTERVIEW_EXPERIENCE", label: "Interview Experience" },
];

const BlogsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState(FILTER_LIST[0].value);

  return (
    <div className="main w-full mt-8">
      <div className="flex justify-between">
        <div className="flex flex-col ml-10">
          <div className="font-medium text-2xl">Community</div>
          <div>
            <div className="btn flex justify-between m-6 p-5 border-b-2">
              {/* FILTERS */}
              <div>
                {FILTER_LIST.map((filter) => {
                  const isSelected = filter.value === selectedFilter;
                  const className = isSelected
                    ? "border-blue-700 text-blue-700 bg-blue-100"
                    : "border-gray-600 text-gray-600 bg-transparent";

                  return (
                    <button
                      key={filter.value}
                      className={`border ml-2 font-semibold py-2 px-4 rounded-3xl transition duration-300 ${className}`}
                      onClick={() => setSelectedFilter(filter.value)}>
                      {filter.label}
                    </button>
                  );
                })}
              </div>
              <div>
                <button
                  className=" flex justify-between bg-blue-700 border-blue-700 font-semibold py-2 px-4 rounded-2xl text-white hover:bg-blue-500 hover:text-white transition duration-300"
                  width={81}>
                  <Image
                    src={"/svg/pen.svg"}
                    alt={"logo"}
                    width={15}
                    height={15}
                    className="mt-1 mr-2"
                  />
                  Write
                </button>
              </div>
            </div>

            {/* Comments */}
            {Array.from({ length: 4 }).map((_, idx) => (
              <React.Fragment key={idx}>
                <Comments />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="border-r-2 border-gray-100"></div>
        {/* Tags Section */}
        <aside className="flex flex-col">
          <TagsSection />
        </aside>
      </div>
    </div>
  );
};

export default BlogsPage;
