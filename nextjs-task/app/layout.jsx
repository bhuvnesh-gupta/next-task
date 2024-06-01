import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Next Task App",
  description: "Created as assignment",
};

const Mainlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Mainlayout;
