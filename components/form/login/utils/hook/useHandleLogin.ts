import { useCallback } from "react";
import { updateObjectAuth } from "../../../../../store/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { useHandleAsyncStorage } from "../../../../../screens/routing/utils/hooks/useHandleAsyncStorage";

export const useHandleOnLogin = () => {
  const { email, password, username, uriProfileImg } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const dispatch = useDispatch();
  const { setItem } = useHandleAsyncStorage();
  return useCallback(async () => {
    try {
      await setItem(
        "userData",
        JSON.stringify({
          email,
          password,
          username,
          uriProfileImg,
          isLogged: true,
        })
      );
      dispatch(
        updateObjectAuth({
          email,
          password,
          username,
          uriProfileImg,
          isLogged: true,
        })
      );
    } catch (e) {
      console.log("Error :", e);
    }
  }, [setItem, email, password, username, uriProfileImg, dispatch]);
};
