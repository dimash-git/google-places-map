import React from "react";

interface Props {
  count: number;
  perPage: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  places: any[];
}

const BusinessControl = ({ count, setCount, perPage, places }: Props) => {
  const isPrevActive = count > 0;
  const isNextActive = count + perPage < places?.length;
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
        onClick={() => setCount((count) => count - perPage)}
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
        onClick={() => setCount((count) => count + perPage)}
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

export default BusinessControl;
