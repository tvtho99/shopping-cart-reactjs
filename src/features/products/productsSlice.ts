import { createSlice } from '@reduxjs/toolkit';

import ProductType from '../../types/ProductType';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [] as ProductType[],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    fetchProducts: (state, action) => {},
  },
});

export const { setProducts, fetchProducts } = productsSlice.actions;

export default productsSlice.reducer;
