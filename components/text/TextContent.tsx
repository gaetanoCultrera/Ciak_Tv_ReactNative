import React, { FC, memo } from "react";
import { Text } from "react-native-paper";
import { IPropsBanner } from "../../interfaces/index";

export const TextContent: FC<IPropsBanner> = memo(
  ({ title, variant, style }) => (
    <Text data-testid="customText" style={style} variant={variant}>
      {title}
    </Text>
  )
);
