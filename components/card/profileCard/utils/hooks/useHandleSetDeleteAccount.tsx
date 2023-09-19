import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { resetState } from "../../../../../store/signupSlice";
import { authenticateAsync } from "expo-local-authentication";

export const useHandleSetDeleteAccount = () => {
  const dispatch = useDispatch();
  return useCallback(async () => {
    try {
      const { success } = await authenticateAsync({
        promptMessage: "Biometric authentication required",
      });
      if (success) {
        dispatch(resetState());
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
};
