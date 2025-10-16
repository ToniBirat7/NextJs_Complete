"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css"; // important!

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
            className={isProductsActive ? "text-yellow-400 " : ""}
          >
            Products
          </Link>
          <br />
          <Link href="/products/reviews" className="text-red-500">
            Product Reviews
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
