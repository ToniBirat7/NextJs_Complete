// src/app/products/[productId]/page.tsx
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import OrderComp from "@/_components/OrderComp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;
  const id = productId;
  return {
    title: `Product ${id}`,
    description: `Very good product`,
  };
}

export default async function ProductById({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams?: Promise<{ sort?: "asc" | "dsc"; filter?: "top" | "btm" }>;
}) {
  // await on params/searchParams — they are now Promises in Next.js 15
  const { productId } = await params;
  const resolvedSearchParams = await searchParams;
  const sort = resolvedSearchParams?.sort ?? "none";
  const filter = resolvedSearchParams?.filter ?? "none";

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
