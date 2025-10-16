import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import OrderComp from "@/_components/OrderComp";

type Props = {
  params: { productId: string };
  searchParams: Promise<{ sort?: "asc" | "dsc"; filter?: "top" | "btm" }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product ${id}`,
    description: `Very good product`,
  };
};

const ProductById = async ({ params, searchParams }: Props) => {
  const { productId } = await params;
  const searchParam = await searchParams;

  console.log("Search Params : ", searchParam);

  console.log("Id", productId);

  return (
    <>
      <h1>Product Id: {productId}</h1>
      <h1>
        <Link href={`${productId}/reviews/${productId}`}>Review 1</Link>
      </h1>
      <h1>Sort: {searchParam.sort}</h1>
      <h1>Filter: {searchParam.filter}</h1>
      <OrderComp></OrderComp>
    </>
  );
};

export default ProductById;
