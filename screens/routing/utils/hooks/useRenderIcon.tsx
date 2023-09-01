import React, { useCallback } from "react";
import { IconButton } from "react-native-paper";

export const useRenderIcon = () => {
  return useCallback((nameIcon: string) => <IconButton icon={nameIcon} />, []);
};
