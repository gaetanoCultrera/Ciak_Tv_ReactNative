import { useCallback } from "react";
import { IFormAuth } from "../../../../../interfaces";
import { useDispatch } from "react-redux";
import { updateObjectAuth } from "../../../../../store/signupSlice";
import { useHandleAsyncStorage } from "../../../../../screens/routing/utils/hooks/useHandleAsyncStorage";

export const useHandleSignUp = () => {
  const dispatch = useDispatch();
  const { setItem } = useHandleAsyncStorage();
  return useCallback(
    async ({ email, password, username }: Omit<IFormAuth, "isLogged">) => {
      try {
        await setItem(
          "userData",
          JSON.stringify({ email, password, username, isLogged: true })
        );
        dispatch(
          updateObjectAuth({ email, password, username, isLogged: true })
        );
      } catch (e) {
        console.log("Error saving data:", e);
        alert("An error occurred while saving data");
      }
    },
    [dispatch, setItem]
  );
};
