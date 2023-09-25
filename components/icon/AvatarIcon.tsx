import React, { FC, memo } from "react";
import { IPropIcon } from "../../interfaces/index";
import { Avatar } from "react-native-paper";

export const AvatarIcon: FC<IPropIcon> = memo(({ nameIcon, size }) => (
  <Avatar.Icon size={size} icon={nameIcon} />
));
