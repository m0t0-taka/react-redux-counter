import { configureStore } from "@reduxjs/toolkit"; // これを使うことで簡単にstoreを作ることができる
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
