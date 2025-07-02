import {createSlice} from '@reduxjs/toolkit';
import {getData} from '../../utils';
import {MMKV_KEYS} from '../../constants';
interface UserProps {
  isLoggedIn: boolean;
  data: {
    displayName: string;
    email: string;
    token: string;
    imageProfile: string | undefined;
  };
}
const initialState: UserProps = {
  isLoggedIn: false,
  data: {
    displayName: '',
    email: '',
    token: '',
    imageProfile: getData(MMKV_KEYS.PROFILE_IMAGE),
  },
};
export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    loggedIn: (state, action) => {
      state.data = action.payload;
      state.isLoggedIn = true;
    },
    resetUser: () => {
      return initialState;
    },
    addImageProfile: (state, action) => {
      state.data.imageProfile = action.payload;
    },
    updateToken: (state, action) => {
      state.data.token = action.payload;
    },
  },
});

export const {addImageProfile, loggedIn, resetUser,updateToken} = userSlice.actions;
export default userSlice.reducer;
