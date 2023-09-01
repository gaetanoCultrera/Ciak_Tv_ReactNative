import React from "react";
import { renderHook } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { RootState, setupStore } from "../../../../../store/store";
import { PreloadedState } from "@reduxjs/toolkit";
import { useHandleOnLogin } from "./useHandleLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const mockedPromise = new Promise()
//mettere require actual
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
}));

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

//dati dello store
const { result } = renderHook(() => useHandleOnLogin(), {
  wrapper: ({ children }) => (
    <Provider store={setupStore(mockStore)}>{children}</Provider>
  ),
});

describe("useHandleOnLogin", () => {
  test("should handle login correctly", async () => {
    try {
      const handleLogin = result.current;
      await handleLogin();
      expect(AsyncStorage.setItem).toBeCalledWith(
        "userData",
        '{"email":"test@example.com","password":"Aaaaaaaa8!","username":"test","isLogged":true}'
      );
    } catch (e) {
      expect(e).toEqual({
        "Error :": e,
      });
    }
  });
});
