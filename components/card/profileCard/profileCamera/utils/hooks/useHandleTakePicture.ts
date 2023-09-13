import { useCallback } from "react";
import { IPropsTakePicture } from "../../../../../../interfaces/IPropsProfileCamera";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";
import { updateObjectAuth } from "../../../../../../store/signupSlice";
import { FlashMode } from "expo-camera";
import { useHandleAsyncStorage } from "../../../../../../screens/routing/utils/hooks/useHandleAsyncStorage";

export const useHandleTakePicture = ({
  cameraRef,
  setFlashMode,
  flashMode,
}: IPropsTakePicture) => {
  const dataUser = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const dispatch = useDispatch();
  const { setItem } = useHandleAsyncStorage();
  const handleTakePicture = useCallback(async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync({
          quality: 0.5,
          base64: true,
        });
        await setItem(
          "userData",
          JSON.stringify({
            ...dataUser,
            uriProfileImg: uri,
          })
        );
        dispatch(
          updateObjectAuth({
            ...dataUser,
            uriProfileImg: uri,
          })
        );
        alert("Profile Photo correctly changed");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }, [cameraRef, dataUser, dispatch, setItem]);

  const handleFlashMode = useCallback(() => {
    flashMode === FlashMode.off
      ? setFlashMode(FlashMode.on)
      : setFlashMode(FlashMode.off);
  }, [flashMode, setFlashMode]);

  return { handleTakePicture, handleFlashMode };
};
