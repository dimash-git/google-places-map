import React, { createContext, useEffect, useState } from "react";
import getUserLocation from "@/utils/getUserLocation";

interface UserLocationContextType {
  location: Coords | null;
}

export const UserLocationContext = createContext<UserLocationContextType>(
  {} as UserLocationContextType
);

const UserLocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [userLocation, setUserLocation] = useState<UserLocationContextType>(
    {} as UserLocationContextType
  );

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const coords = await getUserLocation();
        setUserLocation({ location: coords });
      } catch (error) {
        console.error("Error getting user location:", error);
      }
    };

    fetchUserLocation();
  }, []);

  return (
    <UserLocationContext.Provider value={userLocation}>
      {children}
    </UserLocationContext.Provider>
  );
};

export default UserLocationProvider;
