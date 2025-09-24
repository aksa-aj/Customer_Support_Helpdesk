import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

export const signup = (data) => API.post("/signup", data);
export const login = (data) => API.post("/login", data);
