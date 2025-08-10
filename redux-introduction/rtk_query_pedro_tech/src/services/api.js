import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // Query to fetch posts
    // getPost: builder.query({query: (id) => `posts/${id}`}) ,
    getPosts: builder.query({ query: () => "posts" }),

    createPost: builder.mutation({
      query: (body) => ({
        url: "posts",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = jsonPlaceholderApi;
