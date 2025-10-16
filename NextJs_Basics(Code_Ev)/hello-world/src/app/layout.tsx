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
  const isProductsActive =
    pathname === "/products" || pathname.startsWith("/products/");

  console.log("Active : ", isProductsActive);

  return (
    <html lang="en">
      <head />
      <body>
        <nav>
          <Link
            href="/products"
            className={
              isProductsActive
                ? "text-5xl text-red-500"
                : "text-yellow-500 mr-4"
            }
          >
            Products
          </Link>
          <br />
          <Link href="/products/reviews" className="text-amber-300">
            Product Reviews
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
