import React from "react";

const Docs = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay");
    }, 2000);
  });
  return <div>Did Loading Appear?</div>;
};

export default Docs;
