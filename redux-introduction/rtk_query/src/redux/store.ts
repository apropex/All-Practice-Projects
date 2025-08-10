import { configureStore } from "@reduxjs/toolkit";
import { myAPIs } from "./api";
import { myreducer } from "./reducer";

export const store = configureStore({
  reducer: {
    [myAPIs.reducerPath]: myAPIs.reducer,
    [myreducer.name]: myreducer.reducer,
  },

  middleware: (middle) => middle().concat(myAPIs.middleware),
});
