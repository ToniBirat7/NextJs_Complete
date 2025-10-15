"use client";

import React from "react";
import { usePathname } from "next/navigation";

const NotFoundReviews = () => {
  const pathName = usePathname();
  return <>Error for {pathName}</>;
};

export default NotFoundReviews;
