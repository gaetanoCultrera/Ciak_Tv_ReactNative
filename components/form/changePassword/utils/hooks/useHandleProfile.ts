import { useCallback } from "react";
import { updateObjectAuth } from "../../../../../store/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { IFormProfile } from "../../../../../interfaces/IFormAuth";
import { IOnSubmitProp } from "../../../../../interfaces/IOnSubmitProp";
import { ToastAndroid } from "react-native";
import {
  authenticateAsync,
  isEnrolledAsync,
  hasHardwareAsync,
} from "expo-local-authentication";
export const useHandleProfile = () => {
  const dataUser = useSelector(({ userData }: RootState) => userData);
  const dispatch = useDispatch();

  return useCallback(
    async (
      { newPassword }: Pick<IFormProfile, "newPassword">,
      { setSubmitting, resetForm }: IOnSubmitProp
    ) => {
      try {
        if ((await hasHardwareAsync()) && (await isEnrolledAsync())) {
          const { success } = await authenticateAsync({
            promptMessage: "Biometric authentication required",
          });
          if (success) {
            setSubmitting(true);
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
          }
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log("Error :", e);
        alert("An error occurred when change password");
      }
    },
    [dataUser, dispatch]
  );
};
