import { configureStore } from "@reduxjs/toolkit";
import { JuiceApi } from "./JuiceApi";



export const store = configureStore({
  reducer: {
    [JuiceApi.reducerPath]: JuiceApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    JuiceApi.middleware
  ])
});