import axios from "axios";
import { Response } from "./components/App/types";

const API_KEY = "Yx8n38vuvcDKpmKajKqr4fn7Vl188pTSAlD8cpsav98";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

const fetchArticles = async (
  searchQuery: string,
  page: number
): Promise<Response> => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery.trim(),
      page,
    },
  });
  return response.data;
};

export default fetchArticles;
