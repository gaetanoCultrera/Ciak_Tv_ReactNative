import { useCallback } from "react";
import { IPropsTypeCamera } from "../../../../../../interfaces/index";
import { CameraType } from "expo-camera";

export const useHandleCameraType = ({ setType }: IPropsTypeCamera) => {
  return useCallback(
    () =>
      setType((current) =>
        current === CameraType.back ? CameraType.front : CameraType.back
      ),
    [setType]
  );
};
