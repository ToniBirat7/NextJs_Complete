// src/app/products/[productId]/page.tsx
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import OrderComp from "@/_components/OrderComp";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const id = params.productId;
  return {
    title: `Product ${id}`,
    description: `Very good product`,
  };
}

export default async function ProductById({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams?: { sort?: "asc" | "dsc"; filter?: "top" | "btm" };
}) {
  // no await on params/searchParams — they are plain objects
  const { productId } = params;
  const sort = searchParams?.sort ?? "none";
  const filter = searchParams?.filter ?? "none";

  console.log("Search Params:", { sort, filter });
  console.log("Id", productId);

  return (
    <>
      <br />
      <br />
      <br />

      <h1>Product Id: {productId}</h1>
      <h1>
        <Link href={`/products/${productId}/reviews/1`}>Review 1</Link>
      </h1>
      <h1>Sort: {sort}</h1>
      <h1>Filter: {filter}</h1>
      <OrderComp />
    </>
  );
}
