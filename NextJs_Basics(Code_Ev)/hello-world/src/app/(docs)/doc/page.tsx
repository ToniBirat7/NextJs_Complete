import React from "react";

function getRandInt(num: number) {
  return Math.floor(Math.random() * num);
}

const Docs = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Compelted");
    }, 3000);
  });
  const rand = getRandInt(2);
  if (rand === 1) {
    throw new Error("1 is Error");
  }
  return <div>Docs</div>;
};

export default Docs;
