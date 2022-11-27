import axios from "axios";

// const URL = process.env.API_URL || "http://localhost:5002";
// const URL = process.env.API_URL || "http://localhost:5002";

//DEV
const URL = "http://localhost:5002";
// const URL = "https://dulcestore.onrender.com";

export const api = axios.create({ baseURL: URL });
const TOKEN = localStorage.getItem("token");

api.defaults.headers["Authorization"] = `Bearer ${TOKEN}`;

export function signUp(body) {
  return api.post("/sign-up", body);
}

export function signIn(body) {
  return api.post("/sign-in", body);
}

export function getProductList() {
  return api.get("/product-list");
}
