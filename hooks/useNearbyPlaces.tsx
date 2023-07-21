import useSWRImmutable from "swr/immutable";
import fetcher from "@/utils/fetcher";
import { useContext } from "react";
import { LocationContext } from "@/context/LocationContext";

const useNearbyPlaces = (category: string) => {
  const { location } = useContext(LocationContext);

  const { data, error, isLoading } = useSWRImmutable(
    location
      ? `/api/google/nearby?category=${category}&lat=${location.lat}&lng=${location.lng}`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useNearbyPlaces;
