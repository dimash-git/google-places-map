import React from "react";

interface Props {
  businessCount: number;
  setBusinessCount: React.Dispatch<React.SetStateAction<number>>;
  bussinessesPerPage: number;
  businessList: Business[];
}

const NavControl = ({
  businessCount,
  setBusinessCount,
  bussinessesPerPage,
  businessList,
}: Props) => {
  const isPrevActive = businessCount > 0;
  const isNextActive =
    businessCount + bussinessesPerPage < businessList?.length;
  return (
    <>
      <button
        type="button"
        className={`p-2 rounded-lg transition text-gray-400
              ${
                isPrevActive
                  ? "cursor-pointer hover:text-purple-500 hover:bg-purple-100"
                  : "opacity-25"
              }`}
        onClick={() => setBusinessCount((count) => count - bussinessesPerPage)}
        disabled={isPrevActive ? false : true}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        type="button"
        className={`p-2 rounded-lg transition text-gray-400
              ${
                isNextActive
                  ? "cursor-pointer hover:text-purple-500 hover:bg-purple-100"
                  : "opacity-25"
              }`}
        onClick={() => setBusinessCount((count) => count + bussinessesPerPage)}
        disabled={isNextActive ? false : true}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
};

export default NavControl;
