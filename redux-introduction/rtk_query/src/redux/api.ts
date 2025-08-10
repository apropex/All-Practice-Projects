import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myAPIs = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({ query: () => "/posts" }),

    newPost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useNewPostMutation } = myAPIs;

/*
tagsTypes: ["Posts"]

providesTags: ["Posts"]
invalidatesTags: ["Posts"]
*/
