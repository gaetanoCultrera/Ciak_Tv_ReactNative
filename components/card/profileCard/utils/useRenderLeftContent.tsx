import React, { useCallback } from "react";
import { AvatarIcon } from "../../..";

export const useRenderLeftContent = () => {
  return useCallback(
    (nameIcon: string) => <AvatarIcon nameIcon={nameIcon} />,
    []
  );
};
