import React, { FC, memo } from "react";
import { IconButton } from "react-native-paper";
import { IPropsRenderYoutubeButton } from "../../../interfaces/index";

export const YoutubeButton: FC<IPropsRenderYoutubeButton> = memo(
  ({ handleApp }) => {
    return (
      <IconButton
        icon="youtube"
        iconColor="red"
        size={50}
        onPress={handleApp}
      />
    );
  }
);
