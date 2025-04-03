import {createSlice} from '@reduxjs/toolkit';
import {ProductDto} from '../../constants';

const initialState: ProductDto[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      const isItemExist = state.find(
        product => product.id === action.payload.id,
      );
      if (!isItemExist) state.push(action.payload);
    },
    remove: (state, action) => state.filter(item => item.id !== action.payload),
  },
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;
