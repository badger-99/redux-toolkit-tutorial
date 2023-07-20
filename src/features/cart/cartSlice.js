import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (store) => {
      store.cartItems = [];
    },
    removeItem: (store, action) => {
      const itemID = action.payload;
      store.cartItems = store.cartItems.filter((item) => item.id !== itemID);
    },
    toggleAmount: (store, { payload }) => {
      const cartItem = store.cartItems.find((item) => item.id === payload.id);
      if (payload.operation === 'increase') {
        cartItem.amount = cartItem.amount + 1;
      }
      if (payload.operation === 'decrease') {
        cartItem.amount = cartItem.amount - 1;
      }
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity += item.amount;
        total += item.price * item.amount;
      });
      state.amount = quantity;
      state.total = total;
    },
  },
});

// console.log(cartSlice)

export const { clearCart, removeItem, toggleAmount, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer; //if you log cartSlice, you'll notice  reducer is one of it's properties. we want to export the reducer specifically.
