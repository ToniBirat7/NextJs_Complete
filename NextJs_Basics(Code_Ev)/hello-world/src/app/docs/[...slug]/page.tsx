import React from "react";

type params = {
  params: {
    slug: string[];
  };
};

const InnerDoc = async ({ params }: params) => {
  const slug = await params;
  console.log("Slug,", typeof slug);
  return <div>{slug.slug.length}</div>;
};

export default InnerDoc;
