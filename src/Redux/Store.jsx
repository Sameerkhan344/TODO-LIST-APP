import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./ReducerSlice/UserSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
