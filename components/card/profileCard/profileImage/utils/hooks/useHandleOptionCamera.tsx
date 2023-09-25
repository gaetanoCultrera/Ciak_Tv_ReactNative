import { useCallback } from "react";
import { Camera } from "expo-camera";
import { Alert } from "react-native";
import { IPropsProfileCamera } from "../../../../../../interfaces/index";
import { useHandleImagePicker } from "./useHandleImagePicker";

export const useHandleOptionCamera = ({
  setShowCamera,
}: IPropsProfileCamera) => {
  const handlePickImage = useHandleImagePicker();
  return useCallback(async () => {
    const { granted } = await Camera.requestCameraPermissionsAsync();
    if (granted) {
      Alert.alert(
        "Image Change!",
        "Choose an option",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Upload from device",
            onPress: handlePickImage,
          },
          {
            text: "Open Camera!",

            onPress: () => setShowCamera(true),
          },
        ],
        { cancelable: false }
      );
      return;
    }
    Alert.alert("Access denied");
  }, [handlePickImage, setShowCamera]);
};
