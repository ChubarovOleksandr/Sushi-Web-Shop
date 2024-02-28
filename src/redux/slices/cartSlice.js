import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
}

export const cartSlice = createSlice({
   name: 'cartSlice',
   initialState,
   reducers: {
      saveInCart(state, action) {
         state.items.push(action.payload);
      },
      removeFromCart(state, action) {
         state.items.map((item, index) => {
            if (JSON.stringify(action.payload) == JSON.stringify(item)) {
               state.items.splice(index, 1);
            }
         })
      },
   }
});