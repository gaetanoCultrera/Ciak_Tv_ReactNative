import React, { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { AvatarIcon } from "../../../../index";
import { IPropsProfileCamera } from "../../../../../interfaces/IPropsProfileCamera";
import { useHandleCamera } from "./useHandleCamera";

export const useLeftContent = ({ setShowCamera }: IPropsProfileCamera) => {
  const __startCamera = useHandleCamera({ setShowCamera });
  return useCallback(
    () => (
      <TouchableOpacity onPress={__startCamera}>
        <AvatarIcon nameIcon={"account"} />
      </TouchableOpacity>
    ),
    [__startCamera]
  );
};
