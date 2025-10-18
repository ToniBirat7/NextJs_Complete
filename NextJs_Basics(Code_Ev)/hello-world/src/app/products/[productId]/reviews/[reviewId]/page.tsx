import { notFound } from "next/navigation";
import React from "react";

const ReivewId = async ({
  params,
}: {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}) => {
  const param = await params;
  console.log("Review ", param);
  if (parseInt(param.reviewId) > 10) {
    notFound();
  }
  return (
    <>
      <h1>Review Id : {param.productId}</h1>
      <h1>Product Id: {param.reviewId}</h1>
    </>
  );
};

export default ReivewId;
