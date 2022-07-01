import React from "react";
import Image from "Next/image";
import spinner from "../public/Spinner.gif";

const Spinner = () => {
  return (
    <>
      <Image className="w-[200px] m-auto block" src={spinner} alt="Loading" />
    </>
  );
};

export default Spinner;
