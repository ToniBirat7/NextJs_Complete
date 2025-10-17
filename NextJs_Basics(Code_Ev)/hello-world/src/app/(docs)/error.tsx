"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <>
      <div>Error Encounterd, {error.message}</div>
      <button
        onClick={() => {
          reload();
        }}
      >
        Try Again
      </button>
    </>
  );
};

export default Error;
