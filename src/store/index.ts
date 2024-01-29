import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./slices/itemSlice";

const store = configureStore({
   reducer: {
      items: itemSlice.reducer,
   },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;