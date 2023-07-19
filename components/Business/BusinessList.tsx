import React, { useContext, useState } from "react";
import BusinessItem from "./BusinessItem";
import BusinessControl from "./NavControl";
import ShimmerItem from "./ShimmerItem";

import useNearbyPlaces from "@/hooks/useNearbyPlaces";
import { CategoryContext } from "@/providers/CategoryProvider";

const BusinessList = () => {
  const { selected } = useContext(CategoryContext);

  const { data, isLoading } = useNearbyPlaces(selected);
  const places: any[] = data?.results;

  const [count, setCount] = useState<number>(0);
  const perPage = 4;

  return (
    <div>
      <h2 className="text-xl font-bold my-3 flex items-center justify-between min-h-[40px]">
        Top Nearby Places
        <span className="flex">
          <BusinessControl {...{ count, setCount, perPage, places }} />
        </span>
      </h2>
      <div>
        {!isLoading && places
          ? places.map((item, idx) => {
              if (idx >= count && idx < count + perPage) {
                return <BusinessItem key={idx} business={item} />;
              }
            })
          : Array.from({ length: 4 }, (_, idx) => <ShimmerItem key={idx} />)}
      </div>
    </div>
  );
};

export default BusinessList;
