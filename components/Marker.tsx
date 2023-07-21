import { BusinessContext } from "@/context/BusinessContext";
import { InfoBoxF, MarkerF } from "@react-google-maps/api";
import React, { useContext } from "react";

interface Props {
  location: Coords;
}

const Marker = ({ location }: Props) => {
  const { businessList, businessCount, bussinessesPerPage } =
    useContext(BusinessContext);

  return (
    <>
      {businessList &&
        businessList.map((item, idx) => {
          if (
            idx >= businessCount &&
            idx <= businessCount + bussinessesPerPage
          ) {
            return (
              <MarkerF
                key={idx}
                position={item.geometry.location}
                icon={{
                  url: "/location-pin.png",
                  scaledSize: new google.maps.Size(32, 32),
                }}
              >
                <InfoBoxF
                  options={{ disableAutoPan: true }}
                  position={
                    new google.maps.LatLng({ ...item.geometry.location })
                  }
                >
                  <div
                    style={{
                      backgroundColor: "#c084fc",
                      opacity: 1,
                      padding: 7,
                      color: "white",
                      borderRadius: 10,
                      width: 100,
                    }}
                  >
                    <div style={{ fontSize: 13, color: "white" }}>
                      {item.name}
                    </div>
                  </div>
                </InfoBoxF>
              </MarkerF>
            );
          }
        })}
      <MarkerF
        position={location}
        icon={{
          url: "/marker.png",
          scaledSize: new google.maps.Size(48, 48),
        }}
      />
    </>
  );
};

export default Marker;
