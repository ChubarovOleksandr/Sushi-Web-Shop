import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItemsAPI } from "../../api/ShopAPI";

const initialState = {
   items: [],
}

export const getItems = createAsyncThunk(
   'itemSlice/getItems',
   async function() {
      const response = await getItemsAPI();      
      return response;
   }
)

export const itemSlice = createSlice({
   name: 'itemSlice',
   initialState,
   reducers: {

   },
   extraReducers: (builder) => {
      builder
      .addCase(getItems.pending, () => {
      })
      .addCase(getItems.fulfilled, (state, action) => {
         state.items = action.payload;
      })
   }
})