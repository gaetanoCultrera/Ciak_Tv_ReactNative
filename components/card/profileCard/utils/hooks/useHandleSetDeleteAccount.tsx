/* eslint-disable @typescript-eslint/no-misused-promises */
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { resetState } from "../../../../../store/signupSlice";
import { Alert } from "react-native";

export const useHandleSetDeleteAccount = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    try {
      Alert.alert("Delete Account?", "Are you sure to delete account?", [
        { text: "Don't leave", style: "cancel", onPress: () => {} },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.clear();
            dispatch(resetState());
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
};
