import useSWRImmutable from "swr/immutable";
import fetcher from "@/utils/fetcher";
import { useContext } from "react";
import { UserLocationContext } from "@/providers/UserLocationProvider";

const useNearbyPlaces = (category: string) => {
  const { location } = useContext(UserLocationContext);

  const { data, error, isLoading } = useSWRImmutable(
    location
      ? `/api/google/nearby?category=${category}&lat=${location.latitude}&lng=${location.longitude}`
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
