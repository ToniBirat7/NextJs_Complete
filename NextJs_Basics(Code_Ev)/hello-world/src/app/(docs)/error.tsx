"use client";
import React from "react";
import { useRouter } from "next/router";
import { startTransition } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <>
      <div>Error Encounterd, {error.message}</div>
      <button
        onClick={() => {
          reset();
        }}
      >
        Try Again
      </button>
    </>
  );
};

export default Error;
