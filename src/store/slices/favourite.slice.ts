import {createSlice} from '@reduxjs/toolkit';
import {ProductDto} from '../../constants';

const initialState: ProductDto[] = [];

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      state = state.filter(item => item.id !== action.payload);
    },
  },
});

export const {add, remove} = favouriteSlice.actions;
export default favouriteSlice.reducer;
