"use client";
import React from "react";

const Error = ({ error }: { error: Error }) => {
  return <div>Error Encounterd, {error.message}</div>;
};

export default Error;
