import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});

// console.log(cartSlice)

export default cartSlice.reducer //if you log cartSlice, you'll notice  reducer is one of it's properties. we want to export the reducer specifically.