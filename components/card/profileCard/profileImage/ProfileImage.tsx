/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { useHandleCamera } from "./utils/hooks/useHandleCamera";
import { IPropsProfileCamera } from "../../../../interfaces/IPropsProfileCamera";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { AvatarImage } from "../../../icon/AvatarImage";

export const ProfileImage: FC<IPropsProfileCamera> = ({ setShowCamera }) => {
  const { uriProfileImg } = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const __startCamera = useHandleCamera({ setShowCamera });

  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <TouchableOpacity onPress={__startCamera}>
        <AvatarImage size={100} uriProfileImg={uriProfileImg} />
      </TouchableOpacity>
    </View>
  );
};
