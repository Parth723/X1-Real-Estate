import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  selectedUser: number | null;
}

const initialState: UserState = {
  selectedUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser(state, action: PayloadAction<number | null>) {
      state.selectedUser = action.payload;
    },
  },
});

export const { setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
