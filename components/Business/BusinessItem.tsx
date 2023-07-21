"use client";
import { BusinessContext } from "@/context/BusinessContext";
import Image from "next/image";
import React, { useContext } from "react";

interface Props {
  business: Business;
  className?: String;
}

const BusinessItem = ({ business, className }: Props) => {
  const photoRef = business?.photos?.[0]?.photo_reference;
  const imageUrl = photoRef
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=700&photo_reference=${photoRef}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`
    : null;

  const { setBusinessSelected } = useContext(BusinessContext);

  const handleClick = () => {
    setBusinessSelected(business);
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex gap-3 py-3 md:px-3 mb-4 items-center border-b-[1px] border-purple-200 hover:bg-purple-50 hover:scale-105 transition rounded-md ${
        className || null
      }`}
    >
      <div className="h-[100px] w-[100px] flex flex-shrink-0 items-center justify-center">
        <Image
          src={imageUrl || "/placeholder.jpg"}
          alt="Business"
          width={96}
          height={96}
          className="h-full w-full rounded-xl object-cover"
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
        />
      </div>
      <div>
        <h3 className="font-semibold text-xl">{business?.name}</h3>
        <h4 className="text-md text-gray-500">{business?.vicinity}</h4>
        <div className="flex gap-2 items-center">
          {business.rating && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <p>{business.rating ? business.rating : "Not rated yet"}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessItem;
