import React, { useCallback } from "react";
import { IconButton } from "react-native-paper";
import { AvatarImage } from "../../../../components/icon/AvatarImage";

export const useRenderIcon = () => {
  const renderIcon = useCallback(
    (nameIcon: string) => <IconButton icon={nameIcon} />,
    []
  );

  const renderImage = useCallback(
    (uriProfileImg: string) => (
      <AvatarImage size={24} uriProfileImg={uriProfileImg} />
    ),
    []
  );

  return { renderIcon, renderImage };
};
