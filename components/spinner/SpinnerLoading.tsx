import React, { memo, FC } from "react";
import { ActivityIndicator } from "react-native-paper";
import { IPropsSpinner } from "../../interfaces/index";

export const SpinnerLoading: FC<IPropsSpinner> = memo(({ color, testID }) => (
  <ActivityIndicator testID={testID} animating={true} color={color} />
));
