import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItemsAPI } from "../../api/ShopAPI";

interface itemsType {
   category: number,
   components: string,
   description: string,
   discount: number,
   id: string,
   imageUrl: string,
   name: string,
   price: number,
   weight: number
}

interface stateType {
   status: string,
   items: itemsType[],
}

const initialState: stateType = {
   status: '',
   items: [],
}

export const getItems = createAsyncThunk(
   'itemSlice/getItems',
   async function() {
      const response = await getItemsAPI();

      console.log(response);
      
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
      .addCase(getItems.pending, (state) => {
         state.status = 'loading';
      })
      .addCase(getItems.fulfilled, (state, action) => {
         state.items = action.payload;
      })
   }
})