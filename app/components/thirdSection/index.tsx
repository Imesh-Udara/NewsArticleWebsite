import React from "react";
import SubTopic from "../newsToday/SubTopic";
import NewsGrid from "../newsToday/newsGrid";
import Button from "../Button";

const ThirdSection = () => {
  return (
    <>
      <div className="container grid grid-cols-3 gap-4">
        <div className="col-span-2">
        <SubTopic/>
        </div>
        <div className="flex align-items: center">
          <ul className="flex space-x-4 border-b-2">
            <li><Button/></li>
            <li><Button/></li>

          </ul>
          
          </div>
        <div className=""><NewsGrid/></div>
        <div className=""><NewsGrid/></div>
        <div className="">05</div>
        <div className="col-span-2"><SubTopic/></div>
        <div>06</div>
        <div><NewsGrid/></div>
        <div><NewsGrid/></div>
        
      </div>
    </>
  );
};

export default ThirdSection;
