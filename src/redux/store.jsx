import { configureStore } from "@reduxjs/toolkit";
import darkmode from "./action/darkmode";

export const store = configureStore({
  reducer: { darkmode },
});
