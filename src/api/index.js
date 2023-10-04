import axios from "axios";

const token = localStorage.getItem("access_token");

console.log(token);

export const publicApi = axios.create({
  baseURL: "http://localhost:4000/",
});

export const privateApi = axios.create({
  baseURL: "http://localhost:4000/",

  headers: {
    Authorization: `Bearer ${token}`,
  },
});
