"use client";
import React, { useContext, useMemo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { LocationContext } from "@/context/LocationContext";
import Marker from "@/components/Marker";
import { BusinessContext } from "@/context/BusinessContext";
import useMediaQuery from "@/hooks/useMediaQuery";

const Map = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const containerStyle = {
    width: "100%",
    height: isMobile ? "300px" : `calc(100vh - 2.5rem)`,
  };

  const { location } = useContext(LocationContext);
  const { businessList, businessSelected } = useContext(BusinessContext);

  const center: google.maps.LatLngLiteral | undefined = useMemo(() => {
    if (location && location.lat && location.lng) {
      return { lat: location.lat, lng: location.lng };
    }
    return undefined;
  }, [location]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
  });

  const [_, setMap] = React.useState<google.maps.Map | undefined>(undefined);

  const onLoad = React.useCallback(
    function callback(map: google.maps.Map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center]
  );

  const onUnmount = React.useCallback(function callback() {
    setMap(undefined);
  }, []);

  return isLoaded && businessList && location ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={businessSelected ? businessSelected?.geometry?.location : center}
      zoom={20}
      onLoad={onLoad}
      onUnmount={onUnmount}
      mapContainerClassName="rounded-2xl"
    >
      <>
        <Marker location={location} />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
