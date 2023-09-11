import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { updateObjectAuth } from "../../../../../store/signupSlice";
import { useHandleAsyncStorage } from "../../../../../screens/routing/utils/hooks/useHandleAsyncStorage";

export const useHandleSetLogout = () => {
  const dataUser = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const dispatch = useDispatch();
  const { setItem } = useHandleAsyncStorage();
  return useCallback(async () => {
    try {
      await setItem(
        "userData",
        JSON.stringify({ ...dataUser, isLogged: false })
      );
      dispatch(updateObjectAuth({ ...dataUser, isLogged: false }));
    } catch (error) {
      console.log(error);
    }
  }, [dataUser, dispatch, setItem]);
};
