import React, { useContext, useEffect, useState } from "react";
import BusinessItem from "./BusinessItem";
import NavControl from "./NavControl";
import ShimmerItem from "./ShimmerItem";

import useNearbyPlaces from "@/hooks/useNearbyPlaces";
import { CategoryContext } from "@/context/CategoryContext";
import { BusinessContext } from "@/context/BusinessContext";

const BusinessList = () => {
  const { categorySelected } = useContext(CategoryContext);
  const {
    businessList,
    setBusinessList,
    businessCount,
    setBusinessCount,
    bussinessesPerPage,
    setBussinessesPerPage,
    businessSelected,
  } = useContext(BusinessContext);

  const { data, isLoading } = useNearbyPlaces(categorySelected);

  useEffect(() => {
    if (data) setBusinessList(data.results);
  }, [data, setBusinessList]);

  useEffect(() => {
    setBussinessesPerPage(4);
  }, [setBussinessesPerPage]);

  return (
    <div>
      <h2 className="text-xl font-bold my-3 flex items-center justify-between min-h-[40px]">
        Top Nearby Places
        <span className="flex">
          <NavControl
            {...{
              businessCount,
              setBusinessCount,
              bussinessesPerPage,
              businessList,
            }}
          />
        </span>
      </h2>
      <div>
        {!isLoading && businessList
          ? businessList.map((item, idx) => {
              if (
                idx >= businessCount &&
                idx < businessCount + bussinessesPerPage
              ) {
                return (
                  <BusinessItem
                    className={`${
                      businessSelected.vicinity === item.vicinity &&
                      businessSelected.name === item.name
                        ? "border-[1px] bg-purple-50 "
                        : null
                    }`}
                    key={idx}
                    business={item}
                  />
                );
              }
            })
          : Array.from({ length: 4 }, (_, idx) => <ShimmerItem key={idx} />)}
      </div>
    </div>
  );
};

export default BusinessList;
