import React, { useCallback } from "react";
import { Variant } from "../../../../constans/Variant";
import { TextContent } from "../../../text/TextContent";
import {
  IPropsRenderParams,
  CustomDataCard,
} from "../../../../interfaces/index";
import { DashboardCard } from "../../../card/dashboardCard/DashboardCard";

export const useRenderParamsList = ({
  currentPage,
  resultDataLength,
  typeList,
  isFetching,
  setCurrentPage,
  totalPages,
}: IPropsRenderParams) => {
  const renderCurrentPagination = useCallback(
    () =>
      !typeList && (
        <TextContent
          variant={Variant.TITLE_LARGE}
          title={String(resultDataLength ? currentPage : "")}
        />
      ),
    [currentPage, resultDataLength, typeList]
  );

  const handleSetPagination = useCallback(
    () =>
      !isFetching && currentPage < (totalPages as number)
        ? setCurrentPage((prev) => prev + 1)
        : null,
    [currentPage, isFetching, setCurrentPage, totalPages]
  );

  const renderItemList = useCallback(
    ({ id, title, poster_path }: CustomDataCard) => (
      <DashboardCard id={id} title={title} poster_path={poster_path} />
    ),
    []
  );

  const handleKeyExtractor = useCallback((id: string) => id, []);

  return {
    renderCurrentPagination,
    handleSetPagination,
    renderItemList,
    handleKeyExtractor,
  };
};
