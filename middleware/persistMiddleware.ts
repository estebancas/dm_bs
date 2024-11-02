import { Middleware } from "@reduxjs/toolkit";

const persistMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (typeof window !== "undefined") {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  }

  return result;
};

export default persistMiddleware;
