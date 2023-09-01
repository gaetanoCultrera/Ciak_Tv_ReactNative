import React from "react";
import { PreloadedState } from "@reduxjs/toolkit";
import { useValidationSchemaLogin } from "./useValidationSchema";
import { renderHook } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { RootState, setupStore } from "../../../../store/store";

const mockStore: PreloadedState<RootState> = {
  objectSignUp: {
    dataSignup: {
      email: "test@example.com",
      password: "Aaaaaaaa8!",
      username: "test",
      isLogged: true,
    },
  },
};

describe("ValidationSchema", () => {
  test("should validates schema with correct data", async () => {
    //dati dello store
    const { result } = renderHook(() => useValidationSchemaLogin(), {
      wrapper: ({ children }) => (
        <Provider store={setupStore(mockStore)}>{children}</Provider>
      ),
    });

    const { email, password } = {
      email: "test@example.com",
      password: "Aaaaaaaa8!",
    };

    const handleValidation = result.current;
    await expect(
      handleValidation.validate({ email, password })
    ).resolves.toBeTruthy();
  });
});
