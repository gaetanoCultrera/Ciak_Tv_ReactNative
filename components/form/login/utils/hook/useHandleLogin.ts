import { useCallback } from "react";
import { updateObjectAuth } from "../../../../../store/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useHandleOnLogin = () => {
  const { email, password, username } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const dispatch = useDispatch();
  return useCallback(async () => {
    try {
      await AsyncStorage.setItem(
        "userData",
        JSON.stringify({ email, password, username, isLogged: true })
      );
      dispatch(updateObjectAuth({ email, password, username, isLogged: true }));
    } catch (e) {
      console.log("Error :", e);
    }
  }, [email, password, username, dispatch]);
};
