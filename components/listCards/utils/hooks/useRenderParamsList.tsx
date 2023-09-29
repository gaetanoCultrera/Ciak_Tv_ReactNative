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
  setIsScrolling,
  isScrolling,
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
  //
  // ?
  // : null,
  const handleSetPagination = useCallback(() => {
    if (!isFetching && currentPage < (totalPages as number)) {
      // if (setIsScrolling) setIsScrolling(true) è la stessa cosa di setIsScrolling?.(true);
      if (!isScrolling) setIsScrolling?.(true);
      setCurrentPage((prev) => prev + 1);
    }
  }, [
    currentPage,
    isFetching,
    isScrolling,
    setCurrentPage,
    setIsScrolling,
    totalPages,
  ]);

  const renderItemList = useCallback(
    ({ id, title, poster_path }: CustomDataCard) => (
      <DashboardCard id={id} title={title} poster_path={poster_path} />
    ),
    []
  );

  const handleKeyExtractor = useCallback(({ id }: { id: string }) => id, []);

  return {
    renderCurrentPagination,
    handleSetPagination,
    renderItemList,
    handleKeyExtractor,
  };
};
