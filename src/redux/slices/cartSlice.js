import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   totalPrice: 0,
   items: [
      /* {
         name: 'СЕТ ГУРМАН',
         price: 899,
         imageUrl: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-gurman-new.png?alt=media&token=0a74f9cd-439c-4a21-a02e-6541a0d575a9}&w=991&h=700&format=auto&mode=fit&q=60",
         weight: 880,
         description: 'Ласкаво просимо у світ витонченого гастрономічного… Каліфорнія з лососем у кунжуті та Макі з тунцем.',
         category: 1,
         components: "Філадельфія з лососем",
         discount: 699,
         id: "1",
         selected: 1,
      },
      {
         name: 'СЕТ ГУРМАН',
         price: 899,
         imageUrl: "https://cdn.sushi-master.ua/sm-ua/products/0001-set-gurman-new.png?alt=media&token=0a74f9cd-439c-4a21-a02e-6541a0d575a9}&w=991&h=700&format=auto&mode=fit&q=60",
         weight: 880,
         description: 'Ласкаво просимо у світ витонченого гастрономічного… Каліфорнія з лососем у кунжуті та Макі з тунцем.',
         category: 1,
         components: "Філадельфія з лососем",
         discount: 699,
         id: "2",
         selected: 1,
      }, */
   ]
}

export const cartSlice = createSlice({
   name: 'cartSlice',
   initialState,
   reducers: {
      saveInCart(state, action) {
         const price = action.payload.discount != 0 ? action.payload.discount : action.payload.price;
         state.items.push({ ...action.payload, selected: 1 });
         state.totalPrice = state.totalPrice + price;
      },
      removeFromCart(state, action) {
         state.items.map((item, index) => {
            if (JSON.stringify(action.payload) == JSON.stringify(item)) {
               state.items.splice(index, 1);
            }
         })
      },
      changeSelectedValue(state, action) {
         const { newValue, id } = action.payload;
         state.items.map((item) => {
            if (JSON.stringify(id) == JSON.stringify(item.id)) {
               item.selected = newValue;
            }
         })
      },
      changeTotalPrice(state, action) {
         const { isIncrease, value } = action.payload;
         isIncrease ? state.totalPrice = state.totalPrice + value : state.totalPrice = state.totalPrice - value;
      }
   }
});

export const { saveInCart, removeFromCart, changeSelectedValue, changeTotalPrice } = cartSlice.actions; 