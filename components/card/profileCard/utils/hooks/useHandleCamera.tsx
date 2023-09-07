import { useCallback } from "react";
import { Camera } from "expo-camera";
import { Alert } from "react-native";
import { IPropsProfileCamera } from "../../../../../interfaces/IPropsProfileCamera";

export const useHandleCamera = ({ setShowCamera }: IPropsProfileCamera) => {
  return useCallback(async () => {
    const { granted } = await Camera.requestCameraPermissionsAsync();
    granted ? setShowCamera(true) : Alert.alert("Access denied");
  }, [setShowCamera]);
};
