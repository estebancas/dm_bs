import { configureStore } from "@reduxjs/toolkit";

import persistMiddleware from "@/middleware/persistMiddleware";
import rootReducer from "./rootReducer";
import { loadState } from "@/lib/utils";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistMiddleware),
});

export default store;
