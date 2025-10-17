// src/app/products/[productId]/page.tsx
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import OrderComp from "@/_components/OrderComp";

/**
 * generateMetadata receives `params` synchronously (plain object).
 * Annotate inline to ensure the type matches Next's expectations.
 */
export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const id = params.productId; // don't await params
  return {
    title: `Product ${id}`,
    description: `Very good product`,
  };
}

/**
 * The page component also receives plain objects for params/searchParams.
 * Make searchParams optional because it may be undefined.
 */
const ProductById = async ({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams?: { sort?: "asc" | "dsc"; filter?: "top" | "btm" };
}) => {
  // no await on params/searchParams
  const { productId } = params;
  const sort = searchParams?.sort;
  const filter = searchParams?.filter;

  console.log("Search Params:", { sort, filter });
  console.log("Id", productId);

  return (
    <>
      <br />
      <br />
      <br />

      <h1>Product Id: {productId}</h1>
      <h1>
        <Link href={`/products/${productId}/reviews/${productId}`}>
          Review 1
        </Link>
      </h1>
      <h1>Sort: {sort}</h1>
      <h1>Filter: {filter}</h1>
      <OrderComp />
    </>
  );
};

export default ProductById;
