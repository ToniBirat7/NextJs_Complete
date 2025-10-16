"use client";

import { useRouter } from "next/navigation";

const OrderComp = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing Order");
    router.push("/");
  };

  return (
    <>
      <button onClick={handleClick}>Check Out</button>
    </>
  );
};

export default OrderComp;
