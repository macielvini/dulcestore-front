import axios from "axios";

//DEV
// const URL = "http://localhost:5002";
const URL = "https://dulcestore.onrender.com";

export const api = axios.create({ baseURL: URL });
const TOKEN = JSON.parse(localStorage.getItem("user"))?.token;

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

export function getCart() {
  return api.get("/get-cart");
}

export function addCart(body) {
  return api.post("/cart-add", body);
}
