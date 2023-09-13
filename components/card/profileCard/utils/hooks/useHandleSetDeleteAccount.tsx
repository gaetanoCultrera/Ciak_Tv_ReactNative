import { useCallback } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { resetState } from "../../../../../store/signupSlice";
import { authenticateAsync } from "expo-local-authentication";
import { Alert, Linking } from "react-native";

export const useHandleSetDeleteAccount = () => {
  const dispatch = useDispatch();
  return useCallback(async () => {
    try {
      const { success } = await authenticateAsync({
        promptMessage: "Authentication required",
        cancelLabel: "exit",
      });
      if (success) {
        await AsyncStorage.clear();
        dispatch(resetState());
      } else {
        Alert.alert(
          "Error in authentication",
          "Have you registered a type of authentication? check here",
          [
            {
              text: "Cancel",
            },
            {
              text: "OK",
              onPress: () => {
                void Linking.sendIntent("android.settings.SECURITY_SETTINGS");
              },
            },
          ]
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
};
