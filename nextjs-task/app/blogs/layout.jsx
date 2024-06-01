import React from "react";

import Header from "@/components/header";

import Sidebar from "@/components/sidebar";

export const metadata = {
  title: "Next Task App",
  description: "Created as assignment",
};

const BlogsLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[80px] w-full flex flex-col">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BlogsLayout;
