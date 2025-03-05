import {configureStore} from '@reduxjs/toolkit';
import {cartReducer, favouriteReducer} from './slices';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourite: favouriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
