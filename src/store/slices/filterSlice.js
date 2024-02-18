import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   categoryId: 0, // 0 - all, 1 - sets, 2 - rolls
   sortBy: '', // '' - default
   // весу ( от большего к меньшему )
   // весу ( от меньшему к большего )
   // цене ( от большего к меньшему )
   // цене ( от меньшему к большего )
   // скидка 
}

const filterSlice = createSlice({
   name: 'filterSlice',
   initialState,
   reducers: {
      changeCategoryId(state, action) {
         state.categoryId = action.payload.id;
      },
      changeSortBy(state, action) {
         state.sortBy = action.payload;
      }
   },
})

export const { changeCategoryId, changeSortBy } = filterSlice.actions;

export default filterSlice;
