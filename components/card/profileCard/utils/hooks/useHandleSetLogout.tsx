import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { updateObjectAuth } from "../../../../../store/signupSlice";

export const useHandleSetLogout = () => {
  const dataUser = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const dispatch = useDispatch();
  return useCallback(async () => {
    try {
      await AsyncStorage.setItem(
        "userData",
        JSON.stringify({ ...dataUser, isLogged: false })
      );
      dispatch(updateObjectAuth({ ...dataUser, isLogged: false }));
    } catch (error) {
      console.log(error);
    }
  }, [dataUser, dispatch]);
};
