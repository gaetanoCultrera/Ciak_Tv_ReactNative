import React, { FC, memo, useMemo } from "react";
import { RenderPropsTitle } from "../../../../interfaces/IRenderProps";
import { TextContent } from "../../../text/TextContent";
import { Variant } from "../../../../constans/Variant";

export const RenderTitle: FC<RenderPropsTitle> = memo(
  ({ dataLength, title }) => {
    const renderTitle = useMemo(
      () =>
        dataLength ? (
          <TextContent title={title} variant={Variant.TITLE_LARGE} />
        ) : null,
      [dataLength, title]
    );
    return renderTitle;
  }
);
