import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://10.10.20.52:5002/api",
  // prepareHeaders: (headers) => {
  //   const token = JSON.parse(localStorage.getItem("accessToken"));
  //   if (token) {
  //     headers.set("Authorization", `${token}`);
  //   }
  //   return headers;
  // },
  prepareHeaders: (headers, { getState }) => {
    const token = getState().logInUser.token;
    console.log("from baseApi", token);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["overview", "host"],
  endpoints: () => ({}),
});

export const imageUrl = "http://10.10.20.52:5002";
