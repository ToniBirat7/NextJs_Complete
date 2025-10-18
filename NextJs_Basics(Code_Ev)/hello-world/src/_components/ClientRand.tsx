// src/app/ClientRand.tsx
"use client";
import React, { useEffect } from "react";

function getRandInt(num: number) {
  return Math.floor(Math.random() * num);
}

export default function ClientRand() {
  useEffect(() => {
    const rand = getRandInt(2);
    console.log("Rand in Client", rand);
    if (rand === 1) {
      throw new Error("1 is from ClientRand");
    }
  }, []);

  return null; // or some small UI
}
