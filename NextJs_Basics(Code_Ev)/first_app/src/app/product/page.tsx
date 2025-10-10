import Link from "next/link";

export default function Products() {
  return (
    <div>
      <Link href="\">Go To Home</Link>
      <h1>Products</h1>
      <p>List of products will be displayed here.</p>
      <h1>
        <Link href="product/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="product/2">Product 2</Link>
      </h1>
      <h1>
        <Link href="product/3" replace>
          Product 3
        </Link>
      </h1>
    </div>
  );
}
