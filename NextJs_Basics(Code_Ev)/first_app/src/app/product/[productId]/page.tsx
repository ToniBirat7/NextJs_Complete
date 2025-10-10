import { Metadata } from "next";
import Link from "next/link";
import { title } from "process";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await Promise.resolve(params);
  return {
    title: `Product ${productId}`,
  };
};

type Props = {
  params: {
    productId: String;
  };
};

export default async function Product({ params }: Props) {
  const { productId } = await Promise.resolve(params);
  return (
    <div>
      <Link href="/product">Go Back</Link>
      <h1>Product Id {productId}</h1>
      <p>Product details will be displayed here.</p>
    </div>
  );
}
