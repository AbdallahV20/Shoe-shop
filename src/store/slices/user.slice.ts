import {createSlice} from '@reduxjs/toolkit';
import {getData} from '../../utils';
import {MMKV_KEYS} from '../../constants';
interface UserProps {
  name: string;
  email: string;
  imageProfile: string | undefined;
}
const initialState: UserProps = {
  name: '',
  email: '',
  imageProfile: getData(MMKV_KEYS.PROFILE_IMAGE),
};
export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    addImageProfile: (state, action) => {
      state.imageProfile = action.payload;
    },
    addUsername: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {addImageProfile} = userSlice.actions;
export default userSlice.reducer;
