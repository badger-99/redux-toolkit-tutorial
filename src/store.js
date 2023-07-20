import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';

// 'store' stores the states.
const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer
  },
});

export default store