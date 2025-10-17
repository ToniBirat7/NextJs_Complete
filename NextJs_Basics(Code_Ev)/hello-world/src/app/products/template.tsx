"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [uname, setUname] = useState("");            
  return (
    <>
      <h1>
        <Link
          href="/products/1"
          style={{
            color: pathName === "/products/1" ? "white" : "red",
          }}
        >
          Product 1
        </Link>
      </h1>
      <h1>
        <Link
          href="/products/2"
          style={{
            color: pathName === "/products/2" ? "white" : "red",
          }}
        >
          Product 2
        </Link>
      </h1>
      <h1>
        <Link
          href="/products/3"
          style={{
            color: pathName === "/products/3" ? "white" : "red",
          }}
        >
          Product 3
        </Link>
      </h1>
      <h1>
        <Link
          href="/products/4"
          style={{
            color: pathName === "/products/4" ? "white" : "red",
          }}
        >
          Product 4
        </Link>
      </h1>
      <input
        type="text"
        value={uname}
        onChange={(e) => {
          setUname(e.target.value);
        }}
        className="white"
        placeholder="Type Name"
      ></input>
      {children}
    </>
  );
}
