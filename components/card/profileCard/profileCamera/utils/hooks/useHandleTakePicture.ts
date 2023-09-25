import { useCallback } from "react";
import { IPropsTakePicture } from "../../../../../../interfaces/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";
import { updateObjectAuth } from "../../../../../../store/signupSlice";
import { FlashMode } from "expo-camera";

export const useHandleTakePicture = ({
  cameraRef,
  setFlashMode,
  flashMode,
}: IPropsTakePicture) => {
  const dataUser = useSelector(({ userData }: RootState) => userData);
  const dispatch = useDispatch();
  const handleTakePicture = useCallback(async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync({
          quality: 0.5,
          base64: true,
        });

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
  }, [cameraRef, dataUser, dispatch]);

  const handleFlashMode = useCallback(() => {
    flashMode === FlashMode.off
      ? setFlashMode(FlashMode.on)
      : setFlashMode(FlashMode.off);
  }, [flashMode, setFlashMode]);

  return { handleTakePicture, handleFlashMode };
};
