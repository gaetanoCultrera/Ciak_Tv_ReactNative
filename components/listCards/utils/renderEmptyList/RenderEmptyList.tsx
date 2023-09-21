import React, { FC, useMemo } from "react";
import { RenderPropsEmptyList } from "../../../../interfaces/IRenderProps";
import { StyleSheet, View } from "react-native";
import { isFetchBaseQueryError } from "../Typeguard";
import { TextContent } from "../../../text/TextContent";
import { ICustomError } from "../../../../interfaces/ICustomErrors";
import { Variant } from "../../../../constans/Variant";

export const RenderEmptyList: FC<RenderPropsEmptyList> = ({
  isLoading,
  error,
}) => {
  const renderEmptyList = useMemo(() => {
    if (isLoading) {
      return (
        <View>
          <View style={skeleton} />
          <View style={skeleton} />
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
  }, [error, isLoading]);
  return renderEmptyList;
};
const { skeleton } = StyleSheet.create({
  skeleton: {
    width: 200,
    height: 20,
    backgroundColor: "#E0E0E0",
    marginVertical: 10,
    borderRadius: 4,
  },
});
