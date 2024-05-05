import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
    }),
    // addTodo: builder.mutation({
    //   query: (body) => ({
    //     url: "todos",
    //     method: "POST",
    //     body,
    //   }),
    // }),
    // deleteTodo: builder.mutation({
    //   query: (id) => ({
    //     url: `todos/${id}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const { useGetTodosQuery } = apiSlice;
