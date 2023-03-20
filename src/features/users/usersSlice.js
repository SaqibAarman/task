import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, { payload }) => {
      state.users = payload;
    },

    setCurrentUsers: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUsers, setCurrentUsers } = userSlice.actions;

export const getAllUsers = (state) => state.users.users;
export default userSlice.reducer;
