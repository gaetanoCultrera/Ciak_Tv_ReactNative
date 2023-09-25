import React, { FC, memo } from "react";
import { LoadingCard } from "../../../../../card/loadingCard/LoadingCard";
import { ILoadingCardsProps } from "../../../../../../interfaces/index";

export const LoadingCardsArray: FC<ILoadingCardsProps> = memo(({ length }) =>
  Array.from({ length: length }, (_, index) => <LoadingCard key={index} />)
);
