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
      if (!isItemExist) state.push(action.payload);
    },
    removeFromFav: (state, action) =>
      (state = state.filter(item => item.id !== action.payload)),
  },
});

export const {addToFav, removeFromFav} = favouriteSlice.actions;
export default favouriteSlice.reducer;
