import React from "react";
import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async({});

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
