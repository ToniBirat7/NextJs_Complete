import React from "react";

import { type Metadata } from "next";
export const metadata: Metadata = {
  title: "Birat Title",
  description: "This is my page description",
  keywords: ["page2", "page3", "page4"],
  twitter: {
    card: "summary_large_image",
    title: "My Page Title",
    description: "This is my page description",
    images: ["https://www.example.com/my-image.jpg"],
  },
};

const Me = () => {
  return <div>Me</div>;
};

export default Me;
