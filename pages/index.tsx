import BusinessList from "@/components/Business/BusinessList";
import CategoryList from "@/components/Category/CategoryList";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import Map from "@/components/Map";

import { LocationProvider } from "@/context/LocationContext";
import { CategoryProvider } from "@/context/CategoryContext";
import { BusinessProvider } from "@/context/BusinessContext";
import Distance from "@/components/Distance";

export default function Home() {
  return (
    <main className="flex">
      <LocationProvider>
        <BusinessProvider>
          <Sidebar />
          <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-4 gap-8">
            <div>
              <SearchBar />

              <CategoryProvider>
                <CategoryList />

                <BusinessList />
              </CategoryProvider>
            </div>
            <div className="max-md:order-first">
              <Map />
              <Distance />
            </div>
          </div>
        </BusinessProvider>
      </LocationProvider>
    </main>
  );
}
