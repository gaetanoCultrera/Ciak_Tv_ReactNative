import React, { FC, memo } from "react";
import { IPropProfileImage } from "../../interfaces/IPropsCard";
import { Avatar } from "react-native-paper";

export const AvatarImage: FC<IPropProfileImage> = memo(
  ({ uriProfileImg, size }) => (
    <Avatar.Image size={size} source={{ uri: uriProfileImg }} />
  )
);
