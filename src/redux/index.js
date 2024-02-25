import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./slices/itemSlice";
import { favoriteSlice } from "./slices/favoriteSlice";

const store = configureStore({
   reducer: {
      items: itemSlice.reducer,
      favorite: favoriteSlice.reducer,
   },
});

export { store };