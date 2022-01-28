import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://HEROKU_URL/api"
      : "http://localhost:8000/api",
});

export default api;
