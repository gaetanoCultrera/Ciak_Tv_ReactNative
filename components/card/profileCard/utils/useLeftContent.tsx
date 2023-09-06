import React, { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { AvatarIcon } from "../../../index";

export const useLeftContent = () => {
  return useCallback(
    () => (
      <TouchableOpacity>
        <AvatarIcon nameIcon={"account"} />
      </TouchableOpacity>
    ),
    []
  );
};
