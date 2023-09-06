import { useCallback } from "react";
import { updateObjectAuth } from "../../../../../store/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IFormProfile } from "../../../../../interfaces/IFormAuth";
import { IOnSubmitProp } from "../../../../../interfaces/IOnSubmitProp";
import { ToastAndroid, Linking, Alert } from "react-native";
import { authenticateAsync } from "expo-local-authentication";
export const useHandleProfile = () => {
  const dataUser = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const dispatch = useDispatch();

  return useCallback(
    async (
      { newPassword }: Pick<IFormProfile, "newPassword">,
      { setSubmitting, resetForm }: IOnSubmitProp
    ) => {
      //non utilizzati ulteriori controlli perchè il dispositivo auto capisce se può usare il fingerprint, conviene utilizzarli solo quando si vuole per forza una auth biometrica
      try {
        const { success } = await authenticateAsync({
          promptMessage: "Authentication required",
        });
        if (success) {
          setSubmitting(true);
          await AsyncStorage.setItem(
            "userData",
            JSON.stringify({
              ...dataUser,
              password: newPassword,
            })
          );
          dispatch(
            updateObjectAuth({
              ...dataUser,
              password: newPassword,
            })
          );
          setSubmitting(false);
          resetForm();
          ToastAndroid.show(
            "Password successfully changed!",
            ToastAndroid.SHORT
          );
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
      } catch (e) {
        console.log("Error :", e);
        alert("An error occurred when change password");
      }
    },
    [dataUser, dispatch]
  );
};
