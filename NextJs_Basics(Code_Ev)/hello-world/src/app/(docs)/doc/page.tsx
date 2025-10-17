import React, { useEffect } from "react";

const Docs = () => {
  useEffect(() => {
    for (let i = 0; i < 999999999; i++) {
      console.log("i", i);
    }
    return () => {
      console.log("UnMounted");
    };
  }, []);
  return <div>Did Loading Appear?</div>;
};

export default Docs;
