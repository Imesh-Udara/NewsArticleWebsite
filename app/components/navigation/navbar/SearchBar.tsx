import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className=" sm:w-[300px] md:w-[70%] relative items-center">
        <input
          className="border-gray-200 border p-2 px-4 rounded-lg"
          type="text"
          placeholder="Search News"
        />
      </div>
    </>
  );
};

export default SearchBar;
