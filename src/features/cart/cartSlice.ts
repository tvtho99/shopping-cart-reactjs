import { createSlice } from '@reduxjs/toolkit';
import CartItemType from '../../types/CartItemType';

type CartStateType = {
  cartItems: CartItemType[];
  cartQuantity: number;
  totalPrice: number;
};

const initialCartState: CartStateType = {
  cartItems: [],
  cartQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const newItem: CartItemType = action.payload;
      const existingItem = state.cartItems.find(
        item => item.productId === newItem.productId
      );
      if (!existingItem) {
        state.cartQuantity++;
        state.cartItems.push({
          quantity: newItem.quantity,
          productId: newItem.productId,
          price: newItem.price,
          totalPrice: newItem.price * newItem.quantity,
          productName: newItem.productName,
          description: newItem.description,
          imageUrl: newItem.imageUrl,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemIndex = state.cartItems.findIndex(
        item => item.productId === id
      );
      const removedItem = state.cartItems[itemIndex];

      removedItem.quantity--;
      removedItem.totalPrice -= removedItem.price;
    },

    deleteFromCart: (state, action) => {
      state.cartQuantity--;
      const id = action.payload;
      const itemIndex = state.cartItems.findIndex(
        item => item.productId === id
      );
      state.cartItems.splice(itemIndex, 1);
    },

    clearCart: (state, action) => {
      state.cartItems = action.payload.cartItems;
      state.cartQuantity = action.payload.cartQuantity;
      state.totalPrice = action.payload.totalPrice;
    },

    submitCart: (state, action) => {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
