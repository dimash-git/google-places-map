import React from "react";

const SearchBar = () => {
  const onChange = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <div className="flex items-center gap-3 bg-purple-100 p-3 rounded-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-purple-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="outline-none bg-transparent w-full text-lg placeholder:purple-400"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
