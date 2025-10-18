import React from "react";

const Reivew = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const param = await params;
  return (
    <>
      <h1>This is Review with Product Id : {param.productId}</h1>
    </>
  );
};

export default Reivew;
