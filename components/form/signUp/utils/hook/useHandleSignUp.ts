import { useCallback } from "react";
import { IFormAuth } from "../../../../../interfaces";
import { useDispatch } from "react-redux";
import { updateObjectAuth } from "../../../../../store/signupSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useHandleSignUp = () => {
  const dispatch = useDispatch();
  return useCallback(
    async ({ email, password, username }: Omit<IFormAuth, "isLogged">) => {
      try {
        await AsyncStorage.setItem(
          "userData",
          JSON.stringify({ email, password, username, isLogged: true })
        );
        dispatch(
          updateObjectAuth({ email, password, username, isLogged: true })
        );
      } catch (e) {
        console.log("Error saving data:", e);
        alert("An error occurred while saving data");
      }
    },
    [dispatch]
  );
};
