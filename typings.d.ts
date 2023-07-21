interface Category {
  name: string;
  value: string;
  icon: string;
}

interface Menu {
  name: string;
  logo: string;
}

interface Business {
  photos: any;
  name: string;
  vicinity: string;
  rating: number;
  geometry: {
    location: Coords;
  };
}

interface Coords {
  lat: number;
  lng: number;
}
