import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   searchByCategoryId: 0, // 0 - all, 1 - sets, 2 - rolls
   filterBy: '', // '' - default
   // весу ( от большего к меньшему )
   // весу ( от меньшему к большего )
   // цене ( от большего к меньшему )
   // цене ( от меньшему к большего )
   // выбранные 
   // скидка 
}

export const filterSlice = createSlice({
   name: 'filterSlice',
   initialState,
   reducers: {

   },
})