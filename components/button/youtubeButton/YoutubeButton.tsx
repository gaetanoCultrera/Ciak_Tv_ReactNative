import React, { FC, memo } from "react";
import { GestureResponderEvent } from "react-native";
import { IconButton } from "react-native-paper";
import { IPropsRenderYoutubeButton } from "../../../interfaces/IPropsRenderGenres";

export const YoutubeButton: FC<IPropsRenderYoutubeButton> = memo(
  ({ handleApp }) => {
    return (
      <IconButton
        icon="youtube"
        iconColor="red"
        size={50}
        onPress={handleApp as unknown as (e: GestureResponderEvent) => void}
      />
    );
  }
);
