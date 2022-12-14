import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../actions/auth";
import Cookies from 'js-cookie'

const initialState = {
  token: Cookies.get("token") || null,
  errorMsg: null,
  successMsg: null
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove("token");
      return initialState;
    }
  },
  extraReducers: (build) => {
    // build.addCase(login.pending, (state) => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(login.fulfilled, (state, action) => {
    //   const token = action.payload?.token;
    //   if (token) {
    //     state.token = token;
    //     Cookies.set("token", token);
    //   } else {
    //     state.errorMsg = action.payload?.errorMsg;
    //     state.successMsg = action.payload?.successMsg;
    //   }
    // });


    build.addCase(register.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(register.fulfilled, (state, action) => {
      state.errormsg = action.payload?.errormsg;
      state.successmsg = action.payload?.successmsg;
    });

  }
});

export { login };
export const { logout } = auth.actions;
export default auth.reducer;
