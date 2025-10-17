import React from "react";

const Docs = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Compelted");
    }, 3000);
  });
  return <div>Docs</div>;
};

export default Docs;
