const calculateDistance = (loc1: Coords, loc2: Coords) => {
  const earthRadius = 6371;

  const degToRad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  const dLat = degToRad(loc2.lat - loc1.lat);
  const dLng = degToRad(loc2.lng - loc1.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(loc1.lat)) *
      Math.cos(degToRad(loc2.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;

  return parseFloat(distance.toFixed(1));
};

export default calculateDistance;
