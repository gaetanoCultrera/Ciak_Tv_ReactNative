import React, { FC, useMemo } from "react";
import {
  RenderPropsEmptyList,
  ICustomError,
} from "../../../../interfaces/index";
import { isFetchBaseQueryError } from "../Typeguard";
import { TextContent } from "../../../text/TextContent";
import { Variant } from "../../../../constans/Variant";
import { View } from "react-native-animatable";
import { LoadingCardsArray } from "./utils/loadingCardsArray/LoadingCardArray";
import { directionRowLoadingCard, directionColumnLoadingCard } from "./style";

export const RenderEmptyList: FC<RenderPropsEmptyList> = ({
  isLoading,
  error,
  typedList,
}) => {
  const renderEmptyList = useMemo(() => {
    if (isLoading) {
      return !typedList ? (
        <View style={directionRowLoadingCard}>
          <LoadingCardsArray length={3} />
        </View>
      ) : (
        <View style={directionColumnLoadingCard}>
          <LoadingCardsArray length={1} />
        </View>
      );
    }
    if (error) {
      if (isFetchBaseQueryError(error)) {
        return (
          <TextContent
            title={(error.data as ICustomError).status_message}
            variant={Variant.BODY_LARGE}
          />
        );
      }
    }
  }, [error, isLoading, typedList]);
  return renderEmptyList;
};
