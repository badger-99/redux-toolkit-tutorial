import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (store) => {
      store.cartItems =[]
    },
    removeItem: (store, action) => {
      const itemID = action.payload
      store.cartItems = store.cartItems.filter((item) => item.id !== itemID);
    }
  }
});

console.log(cartSlice)

export const{clearCart, removeItem} = cartSlice.actions

export default cartSlice.reducer //if you log cartSlice, you'll notice  reducer is one of it's properties. we want to export the reducer specifically.