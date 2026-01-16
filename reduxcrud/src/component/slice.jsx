import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },

    deleteUser: (state, action) => {
      return state.filter((u, i) => i !== action.payload);
    },

    updateUser: (state, action) => {
      const { index, data } = action.payload;
      state[index] = data;
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;

    