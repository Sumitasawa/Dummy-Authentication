
import authReducer from "./Features/auth/authSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;0
