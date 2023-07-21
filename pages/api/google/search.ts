import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { text, lat, lng } = req.query;
    const response = await axios.get(
      BASE_URL +
        "/findplacefromtext/json" +
        "?fields=formatted_address,name,rating,opening_hours,geometry,photos" +
        "&input=" +
        text +
        "&inputtype=textquery" +
        "&locationbias=circle:20000@" +
        lat +
        "," +
        lng +
        "&key=" +
        process.env.GOOGLE_MAP_API_KEY
    );

    const { data } = response;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}
