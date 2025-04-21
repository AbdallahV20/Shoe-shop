import {createSlice} from '@reduxjs/toolkit';
import {ProductDto} from '../../constants';

const initialState: ProductDto[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      const isItemExist = state.find(
        product =>
          product.id === action.payload.id &&
          product.selected_size === action.payload.selected_size,
      );
      if (!isItemExist) state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter(
        item =>
          item.id !== action.payload.id ||
          item.selected_size !== action.payload.selected_size,
      );
    },
  },
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;
