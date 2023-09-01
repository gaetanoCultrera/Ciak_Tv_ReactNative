import React from "react";
import { PreloadedState } from "@reduxjs/toolkit";
import { renderHook } from "@testing-library/react-native";
import { useValidationProfileSchema } from "./useValidationSchema";
import { Provider } from "react-redux";
import { RootState, setupStore } from "../../../../store/store";

const mockStore: PreloadedState<RootState> = {
  objectSignUp: {
    dataSignup: {
      password: "Aaaaaaaa8!",
      username: "mock",
      email: "test@a",
      isLogged: true,
    },
  },
};

describe("ValidationSchema", () => {
  test("validates schema with correct data", async () => {
    //dati dal form di change password
    const { oldPassword, newPassword, confirmPassword } = {
      oldPassword: "Aaaaaaaa8!",
      newPassword: "Bbbbbbbb8!",
      confirmPassword: "Bbbbbbbb8!",
    };

    const { result } = renderHook(() => useValidationProfileSchema(), {
      wrapper: ({ children }) => (
        <Provider store={setupStore(mockStore)}>{children}</Provider>
      ),
    });

    const handleValidation = result.current;
    await expect(
      handleValidation.validate({ oldPassword, newPassword, confirmPassword })
    ).resolves.toBeTruthy();
  });
});
