import React from "react";
import ThirdSection from "../thirdSection";
import NewsGrid from "./newsGrid";

const ArticleBox = () => {
  return (
    <>
      <div className="container grid grid-cols-3 gap-4 mb-40">
        <NewsGrid/>
        <NewsGrid/>
        <NewsGrid/>
      </div>
      <ThirdSection/>
    </>
  );
};

export default ArticleBox;
