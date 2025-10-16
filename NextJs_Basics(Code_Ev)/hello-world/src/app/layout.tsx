"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);
  const isActive = pathname === "/products";
  console.log("Active : ", isActive);

  return (
    <html lang="en">
      <head />
      <body>
        <nav>
          <Link
            href="/products"
            className={isActive ? "text-5xl" : "text-blue-500 mr-4"}
          >
            Products
          </Link>
          <br />
          <Link href="/products/reviews">Product Reviews</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
