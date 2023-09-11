/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { useHandleCamera } from "./utils/hooks/useHandleCamera";
import { IPropsProfileCamera } from "../../../../interfaces/IPropsProfileCamera";
import { AvatarImage } from "../../../icon/AvatarImage";
import { AvatarIcon } from "../../../icon/AvatarIcon";

export const ProfileImage: FC<IPropsProfileCamera> = ({
  setShowCamera,
  uriImage,
}) => {
  const __startCamera = useHandleCamera({ setShowCamera });

  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <TouchableOpacity onPress={__startCamera}>
        {uriImage ? (
          <AvatarImage size={100} uriProfileImg={uriImage} />
        ) : (
          <AvatarIcon size={100} nameIcon="account" />
        )}
      </TouchableOpacity>
    </View>
  );
};
