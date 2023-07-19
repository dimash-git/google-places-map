import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "95%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
  });

  const [_, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
