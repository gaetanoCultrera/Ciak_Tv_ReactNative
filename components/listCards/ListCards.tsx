import React, { FC, memo } from "react";
import { FlatList } from "react-native";
import { IPropsCard } from "../../interfaces/index";
import { RenderEmptyList } from "./utils/renderEmptyList/RenderEmptyList";
import { RenderTitle } from "./utils/renderTitle/RenderTitle";
import { useRenderParamsList } from "./utils/hooks/useRenderParamsList";

export const ListCards: FC<IPropsCard> = memo(
  ({
    titleList,
    resultData,
    currentPage,
    setCurrentPage,
    isLoading,
    totalPages,
    error,
    isHorizontal,
    numColumn,
    typeList,
    isFetching,
  }) => {
    const resultDataLength = resultData?.length;
    const {
      renderCurrentPagination,
      handleSetPagination,
      renderItemList,
      handleKeyExtractor,
    } = useRenderParamsList({
      currentPage,
      resultDataLength,
      typeList,
      isFetching,
      setCurrentPage,
      totalPages,
    });
    return (
      // onEndReachedThreshold={0.5} legato alla distanza dal fondo
      <>
        <RenderTitle dataLength={resultData?.length} title={titleList} />

        <FlatList
          nestedScrollEnabled
          horizontal={isHorizontal}
          numColumns={(numColumn as number) ?? null}
          ListEmptyComponent={
            <RenderEmptyList
              isLoading={isLoading}
              error={error}
              typedList={typeList}
            />
          }
          ListFooterComponent={renderCurrentPagination}
          data={resultData}
          //when touch the board
          onEndReachedThreshold={0}
          onEndReached={handleSetPagination}
          renderItem={({ item }) => renderItemList(item)}
          keyExtractor={({ id }) => handleKeyExtractor(id)}
        />
      </>
    );
  }
);
