import {createSlice} from '@reduxjs/toolkit';
import {ProductDto} from '../../constants';

const initialState: ProductDto[] = [];

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const index = state.findIndex(
        product => product.id === action.payload.id,
      );
      if (index === -1) {
        state.push(action.payload); // Add item if it doesn't exist
      } else {
        state.splice(index, 1); // Remove item if it exists
      }
    },
  },
});

export const {addToFav} = favouriteSlice.actions;
export default favouriteSlice.reducer;
