import { useCallback } from "react";
import { useHandleAsyncStorage } from "./useHandleAsyncStorage";
import { useDispatch } from "react-redux";
import { updateObjectAuth } from "../../../../store/signupSlice";
import { IFormAuth } from "../../../../interfaces";

export const useCheckUserData = () => {
  const dispatch = useDispatch();
  const handleLocalStorage = useHandleAsyncStorage();
  return useCallback(async () => {
    try {
      const userData = await handleLocalStorage("userData");
      if (userData) {
        dispatch(updateObjectAuth(JSON.parse(userData) as IFormAuth));
      }
    } catch (error) {
      console.error("error:", error);
    }
  }, [dispatch, handleLocalStorage]);
};
