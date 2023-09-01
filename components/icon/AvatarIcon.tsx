import React, { FC, memo } from "react";
import { IPropIcon } from "../../interfaces/IPropsCard";
import { Avatar } from "react-native-paper";

export const AvatarIcon: FC<IPropIcon> = memo(({ nameIcon }) => (
  <Avatar.Icon size={40} icon={nameIcon} />
));
