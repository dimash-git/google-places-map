import { useEffect } from "react";

import BusinessList from "@/components/Business/BusinessList";
import CategoryList from "@/components/Category/CategoryList";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import { CategoryProvider } from "@/providers/CategoryProvider";
import getUserLocation from "@/utils/getUserLocation";
import UserLocationProvider from "@/providers/UserLocationProvider";
import Map from "@/components/Map";

export default function Home() {
  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <main className="flex">
      <Sidebar />
      <div
        className="grid grid-cols-1 md:grid-cols-2
        px-6 md:px-10 w-full mt-10 gap-8"
      >
        <div>
          <SearchBar />
          <UserLocationProvider>
            <CategoryProvider>
              <CategoryList />
              <BusinessList />
            </CategoryProvider>
          </UserLocationProvider>
        </div>
        <div>
          <Map />
        </div>
      </div>
    </main>
  );
}
