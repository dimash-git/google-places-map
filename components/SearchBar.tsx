import { BusinessContext } from "@/context/BusinessContext";
import { LocationContext } from "@/context/LocationContext";
import axios from "axios";
import React, { useContext } from "react";

const SearchBar = () => {
  const { location } = useContext(LocationContext);
  const { setBusinessList } = useContext(BusinessContext);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  const onEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = e.currentTarget.value;
      const url = `/api/google/search?text=${value}&lat=${location.lat}&lng=${location.lng}`;
      const response = await axios.get(url);
      const { data } = response;
      setBusinessList(data.candidates);
      console.log(data);
    }
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
        onKeyDown={onEnter}
      />
    </div>
  );
};

export default SearchBar;
