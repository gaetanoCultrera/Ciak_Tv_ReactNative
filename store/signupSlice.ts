import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFormAuth } from "../interfaces/index";
import { Store } from "../constans/Store";

export const initialState: IFormAuth = {
  email: "",
  username: "",
  password: "",
  uriProfileImg: "",
  isLogged: false,
};

export const signupSlice = createSlice({
  name: Store.USERDATA,
  initialState,
  reducers: {
    updateObjectAuth: (_, { payload }: PayloadAction<IFormAuth>) => ({
      ...payload,
    }),
    resetState: () => initialState,
  },
});

export const { updateObjectAuth, resetState } = signupSlice.actions;

export default signupSlice.reducer;
