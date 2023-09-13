import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { useHandleOptionCamera } from "./utils/hooks/useHandleOptionCamera";
import { IPropsProfileCamera } from "../../../../interfaces/IPropsProfileCamera";
import { AvatarImage } from "../../../icon/AvatarImage";
import { AvatarIcon } from "../../../icon/AvatarIcon";
import { containerBadge } from "../../../icon/style";
import { Badge } from "react-native-paper";

export const ProfileImage: FC<IPropsProfileCamera> = ({
  setShowCamera,
  uriImage,
}) => {
  const __startCamera = useHandleOptionCamera({ setShowCamera });
  //TODO gestione promise da custom hook
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <TouchableOpacity onPress={() => void __startCamera()}>
        {uriImage ? (
          <AvatarImage size={300} uriProfileImg={uriImage} />
        ) : (
          <AvatarIcon size={300} nameIcon="account" />
        )}
        <View style={containerBadge}>
          <Badge style={{ backgroundColor: "rgb(120, 69, 172)" }} size={45}>
            ✏️
          </Badge>
        </View>
      </TouchableOpacity>
    </View>
  );
};
