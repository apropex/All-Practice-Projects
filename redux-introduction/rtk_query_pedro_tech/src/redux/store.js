import { configureStore } from "@reduxjs/toolkit";
import { jsonPlaceholderApi } from "../services/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },

  middleware: (middle) => middle().concat(jsonPlaceholderApi.middleware),
});

setupListeners(store.dispatch);
