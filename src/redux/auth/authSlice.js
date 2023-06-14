import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from 'operations';
// import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const registerFulfilled = (state, action)=> {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
}

const logOutFulfilled = (state)=> {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
}

const logInFulfilled = (state,action)=> {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
}

const refreshUserPending = (state)=>{
  state.isRefreshing = true;
}

const refreshUserFulfilled = (state, action)=>{
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
}

const refreshUserRejected = (state, action)=>{
  state.isRefreshing = false;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => 
  builder
  .addCase(register.fulfilled,registerFulfilled)
  .addCase(logOut.fulfilled, logOutFulfilled)
  .addCase(logIn.fulfilled, logInFulfilled)
  .addCase(refreshUser.pending, refreshUserPending)
  .addCase(refreshUser.fulfilled, refreshUserFulfilled)
  .addCase(refreshUser.rejected, refreshUserRejected)
});

export const authReducer = authSlice.reducer;