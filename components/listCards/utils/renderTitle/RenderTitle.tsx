import React, { FC, memo, useMemo } from "react";
import { RenderPropsTitle } from "../../../../interfaces/index";
import { TextContent } from "../../../text/TextContent";
import { Variant } from "../../../../constans/Variant";
import { View } from "react-native";

export const RenderTitle: FC<RenderPropsTitle> = memo(
  ({ dataLength, title }) => {
    const renderTitle = useMemo(
      () =>
        dataLength ? (
          <View style={{ margin: 10 }}>
            <TextContent title={title} variant={Variant.TITLE_LARGE} />
          </View>
        ) : null,
      [dataLength, title]
    );
    return renderTitle;
  }
);
