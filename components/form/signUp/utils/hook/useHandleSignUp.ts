import { useCallback } from "react";
import { IFormAuth } from "../../../../../interfaces/index";
import { useDispatch } from "react-redux";
import { updateObjectAuth } from "../../../../../store/signupSlice";

export const useHandleSignUp = () => {
  const dispatch = useDispatch();
  return useCallback(
    ({ email, password, username }: Omit<IFormAuth, "isLogged">) => {
      try {
        dispatch(
          updateObjectAuth({ email, password, username, isLogged: true })
        );
      } catch (e) {
        console.log("Error saving data:", e);
        alert("An error occurred while saving data");
      }
    },
    [dispatch]
  );
};
