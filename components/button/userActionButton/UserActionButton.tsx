import React, { memo, FC } from "react";
import { Button } from "react-native-paper";
import { IPropsButton } from "../../../interfaces/IPropsButton";

export const UserActionButton: FC<IPropsButton> = memo(
  ({ handleAction, icon, title }) => {
    return (
      <Button icon={icon} onPress={handleAction}>
        {title}
      </Button>
    );
  }
);
