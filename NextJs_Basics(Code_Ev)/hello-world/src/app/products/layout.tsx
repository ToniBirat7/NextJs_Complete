"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <>
      <h1>
        <Link
          href="/products/1"
          style={{
            color: pathName === "/products/1" ? "red" : "black",
          }}
        >
          Product 1
        </Link>
      </h1>
      <h1>
        <Link
          href="/products/2"
          style={{
            color: pathName === "/products/2" ? "red" : "black",
          }}
        >
          Product 2
        </Link>
      </h1>
      <h1>
        <Link
          href="/products/3"
          style={{
            color: pathName === "/products/3" ? "red" : "black",
          }}
        >
          Product 3
        </Link>
      </h1>
      <h1>
        <Link
          href="/products/4"
          style={{
            color: pathName === "/products/4" ? "red" : "black",
          }}
        >
          Product 4
        </Link>
      </h1>
      {children}
    </>
  );
}
