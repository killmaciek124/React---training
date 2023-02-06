import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer, // shortcuty (latwiejszy kod)
    auth: authReducer,
  },
});

export default store;
