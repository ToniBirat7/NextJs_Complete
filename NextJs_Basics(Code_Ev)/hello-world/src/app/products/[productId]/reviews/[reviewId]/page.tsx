import React from "react";

const ReivewId = async ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  const param = await params;
  console.log("Review ", param);
  return (
    <>
      <h1>Review Id : {param.productId}</h1>
      <h1>Product Id: {param.reviewId}</h1>
    </>
  );
};

export default ReivewId;
