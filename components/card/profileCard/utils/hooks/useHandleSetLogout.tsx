import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { updateObjectAuth } from "../../../../../store/signupSlice";
import { useHandleAsyncStorage } from "../../../../../screens/routing/utils/hooks/useHandleAsyncStorage";
import { Alert } from "react-native";

export const useHandleSetLogout = () => {
  const dataUser = useSelector(
    (state: RootState) => state.objectSignUp.dataSignup
  );
  const dispatch = useDispatch();
  const { setItem } = useHandleAsyncStorage();

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
            void setItem(
              "userData",
              JSON.stringify({ ...dataUser, isLogged: false })
            );
            dispatch(updateObjectAuth({ ...dataUser, isLogged: false }));
          },
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  }, [dataUser, dispatch, setItem]);
};
