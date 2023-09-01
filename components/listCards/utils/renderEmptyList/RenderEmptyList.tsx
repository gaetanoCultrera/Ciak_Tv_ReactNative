import React, { FC, useMemo } from "react";
import { RenderPropsEmptyList } from "../../../../interfaces/IRenderProps";

import { SpinnerLoading } from "../../../spinner/SpinnerLoading";
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
      return <SpinnerLoading testID="customSpinner" color={"red"} />;
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
