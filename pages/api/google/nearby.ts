import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { category, lat, lng } = req.query;
    const response = await axios.get(
      BASE_URL +
        "/nearbysearch/json?fields=formatted_address,name,rating,opening_hours,geometry,photos&type=" +
        category +
        "&location=" +
        lat +
        "," +
        lng +
        "&radius=5000&key=" +
        process.env.GOOGLE_MAP_API_KEY
    );

    const { data } = response;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
