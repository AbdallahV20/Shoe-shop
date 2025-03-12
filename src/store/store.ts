import {configureStore} from '@reduxjs/toolkit';
import {cartReducer, favouriteReducer, userSlice} from './slices';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourite: favouriteReducer,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
