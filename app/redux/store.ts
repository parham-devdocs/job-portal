// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";      // ✅ default export = reducer
import loadersReducer from "./loader";

const store = configureStore({
  reducer: {
    user: userReducer,     // 👈 change "users" → "user"
    loaders: loadersReducer
  }
});

export default store;