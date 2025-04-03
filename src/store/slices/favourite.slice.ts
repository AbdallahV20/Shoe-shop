import {createSlice} from '@reduxjs/toolkit';
import {ProductDto} from '../../constants';

const initialState: ProductDto[] = [];

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const isItemExist = state.find(
        product => product.id === action.payload.id,
      );
      if (!isItemExist) {
        state.push(action.payload);
        console.log('Yes A');
      } else {
        state.filter(item => item.id !== action.payload.id);
        console.log('No A');
      }
    },
    removeFromFav: (state, action) =>
      state.filter(item => item.id !== action.payload),
  },
});

export const {addToFav, removeFromFav} = favouriteSlice.actions;
export default favouriteSlice.reducer;
