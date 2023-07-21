import React, { createContext, useEffect, useState } from "react";
import getLocation from "@/utils/getLocation";

interface LocationContextInterface {
  location: Coords;
}

const LocationContext = createContext<LocationContextInterface>(
  {} as LocationContextInterface
);

const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocation] = useState<LocationContextInterface>(
    {} as LocationContextInterface
  );

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const coords = await getLocation();
        setLocation({ location: coords });
      } catch (error) {
        console.error("Error getting user location:", error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
