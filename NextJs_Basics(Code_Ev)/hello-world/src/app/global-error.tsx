"use client";
import React from "react";

const GlobalError = () => {
  return (
    <>
      <h1>Something Went Wrong!!!</h1>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Refresh
      </button>
    </>
  );
};

export default GlobalError;
