import { BusinessContext } from "@/context/BusinessContext";
import { LocationContext } from "@/context/LocationContext";
import calculateDistance from "@/utils/calculateDistance";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const Distance = () => {
  const { businessSelected } = useContext(BusinessContext);
  const { location } = useContext(LocationContext);
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    if (businessSelected.name) {
      console.log(businessSelected);

      const d = calculateDistance(businessSelected.geometry.location, location);
      if (d) setDistance(d);
    }
  }, [businessSelected, location]);

  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&origin=" +
        location.lat +
        "," +
        location.lng +
        "&destination=" +
        businessSelected.geometry.location.lat +
        "," +
        businessSelected.geometry.location.lng +
        "&travelmode=driving"
    );
  };

  return businessSelected.name ? (
    <div className="fixed mb-5 right-1 md:right-4 bottom-0 z-20 flex items-center bg-purple-400 rounded-2xl gap-3 md:gap-5 p-3 md:p-5">
      <div className="text-white">
        <h2 className="font-semibold text-lg">{businessSelected?.name}</h2>
        <span>{distance && `${distance} miles away`}</span>
      </div>
      <div
        className="group bg-purple-300 p-5 rounded-xl cursor-pointer hover:scale-105 transition hover:bg-purple-200"
        onClick={handleClick}
      >
        <Image
          className="group-hover:-rotate-45 transition group-hover:translate-y-1"
          src="/send.png"
          alt="Navigation"
          width={20}
          height={20}
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Distance;
