import axios_ from "axios";

export const axios = axios_.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const axiosPrivate = axios_.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
