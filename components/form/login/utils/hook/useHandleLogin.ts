import { useCallback } from "react";
import { updateObjectAuth } from "../../../../../store/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";

export const useHandleOnLogin = () => {
  const { email, password, username, uriProfileImg } = useSelector(
    ({ userData }: RootState) => userData
  );
  const dispatch = useDispatch();

  return useCallback(() => {
    try {
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
  }, [email, password, username, uriProfileImg, dispatch]);
};
