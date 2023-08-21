import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser } from './operations';
import { fetchCurrentUser } from '../user/operations';

const initialState = {
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    googleAuth(state, action) {
      const { accessToken, refreshToken } = action.payload;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      state.isLoggedIn = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, state => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const { googleAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
