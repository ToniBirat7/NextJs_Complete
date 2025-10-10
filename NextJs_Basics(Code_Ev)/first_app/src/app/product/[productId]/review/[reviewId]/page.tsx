import { type Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default async function Review({ params }: Props) {
  const { productId, reviewId } = await Promise.resolve(params);
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review {reviewId} for Product {productId}
      </h1>
      <p>Product review will be displayed hereeeeeeeeeeeee.</p>
    </div>
  );
}
