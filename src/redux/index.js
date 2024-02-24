import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./slices/itemSlice";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
   reducer: {
      items: itemSlice.reducer,
      filters: filterSlice.reducer,
   },
});

export { store };