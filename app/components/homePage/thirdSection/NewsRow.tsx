import React from "react";
import NewsGrid from "../newsToday/newsGrid";
import SubTopic from "../newsToday/SubTopic";

const NewsRow = () => {
  return (
    <>
      <div className="col-span-3">
        <SubTopic />
      </div>
      <div>
        <NewsGrid />
      </div>
      <div>
        <NewsGrid />
      </div>
      <div>
        <NewsGrid />
      </div>
    </>
  );
};

export default NewsRow;
