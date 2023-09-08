import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFormAuth } from "../interfaces/IFormAuth";

// Define a type for the slice state
export interface ObjectSignupState {
  dataSignup: IFormAuth;
}

export const IInitialState = {
  email: "",
  username: "",
  password: "",
  isLogged: false,
};

const initialState: ObjectSignupState = {
  dataSignup: IInitialState,
};

export const signupSlice = createSlice({
  name: "objectSignUp",
  initialState,
  reducers: {
    updateObjectAuth: (_, { payload }: PayloadAction<IFormAuth>) => ({
      dataSignup: { ...payload },
    }),
    resetState: () => initialState,
  },
});

export const { updateObjectAuth, resetState } = signupSlice.actions;

export default signupSlice.reducer;
