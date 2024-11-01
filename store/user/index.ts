import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name?: string;
  id?: string;
  email?: string;
  comment?: string;
  token?: string;
}

export interface UserState {
  userData: User | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  userData: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userData = null;
      state.isAuthenticated = false;
    },
    setUserComment: (state, action: PayloadAction<string>) => {
      state.userData = {
        ...state.userData,
        comment: action.payload,
      }
    }
  },
});

export const { login, logout, setUserComment } = userSlice.actions;
export default userSlice.reducer;
