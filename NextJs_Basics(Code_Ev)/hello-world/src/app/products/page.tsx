import React, { useState } from "react";
import Link from "next/link";

const page = () => {
  const [uname, setUname] = useState("");
  return (
    <>
      <h1>
        <Link href="products/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="products/2">Product 2</Link>
      </h1>
      <h1>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h1>
      <h1>
        <Link href="products/4">Product 4</Link>
      </h1>
      <div>
        <input
          type="text"
          value={uname}
          onChange={(e) => {
            setUname(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
};

export default page;
