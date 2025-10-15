import React from "react";

const ProductById = async ({ params }: { params: { productId: string } }) => {
  // await the whole params object, then destructure
  const { productId } = await params;
  console.log("Id", productId);
  return (
    <>
      <h1>Product Id: {productId}</h1>
    </>
  );
};

export default ProductById;
