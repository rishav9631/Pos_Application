// redux/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // Initial state for cart items
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload); // Add item to cart
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload); // Remove item from cart
    },
    // Add more reducers as needed
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions; // Export actions
export default cartSlice.reducer; // Export reducer
