import axios from "axios";

export const redditInstance = axios.create({
  baseURL: "https://api.reddit.com",
});
