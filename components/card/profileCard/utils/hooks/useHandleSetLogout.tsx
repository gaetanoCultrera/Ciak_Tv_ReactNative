import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { updateObjectAuth } from "../../../../../store/signupSlice";
import { Alert } from "react-native";

export const useHandleSetLogout = () => {
  const dataUser = useSelector(({ userData }: RootState) => userData);
  const dispatch = useDispatch();

  return useCallback(() => {
    try {
      Alert.alert("Confirm Logout", "Are you sure you want to logout?", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            dispatch(updateObjectAuth({ ...dataUser, isLogged: false }));
          },
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  }, [dataUser, dispatch]);
};
