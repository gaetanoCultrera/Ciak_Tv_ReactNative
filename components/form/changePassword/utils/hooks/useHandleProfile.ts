import { useCallback } from "react";
import { updateObjectAuth } from "../../../../../store/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IFormProfile } from "../../../../../interfaces/IFormAuth";
import { IOnSubmitProp } from "../../../../../interfaces/IOnSubmitProp";
export const useHandleProfile = () => {
  const dataUser = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const dispatch = useDispatch();
  //cambia la password e l'utente si deve riloggare, il valore si cambia solo caso di reinderect, se io cambio la password cambia anche nel localstorage,
  //ma appena premo logout il valore non persiste, per persistere devo causare un redering
  return useCallback(
    async (
      { newPassword }: Pick<IFormProfile, "newPassword">,
      { setSubmitting, resetForm }: IOnSubmitProp
    ) => {
      try {
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
      } catch (e) {
        console.log("Error :", e);
        alert("An error occurred when change password");
      }
    },
    [dataUser, dispatch]
  );
};
