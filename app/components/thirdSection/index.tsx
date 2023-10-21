import React from "react";
import NewsRow from "./NewsRow";

const ThirdSection = () => {
  return (
    <>
      <div className="container grid grid-cols-3 gap-4">
        <NewsRow />
        <NewsRow />
        <NewsRow />
      </div>
    </>
  );
};

export default ThirdSection;
