import React, { FC, useMemo } from "react";
import { FlatList } from "react-native";
import { IPropsCard } from "../../interfaces/IPropsCard";
import { TextContent } from "../text/TextContent";
import { DashboardCard } from "../card/dashboardCard/DashboardCard";
import { RenderEmptyList } from "./utils/renderEmptyList/RenderEmptyList";
import { Variant } from "../../constans/Variant";
import { RenderTitle } from "./utils/renderTitle/RenderTitle";
import { View } from "react-native-animatable";

export const ListCards: FC<IPropsCard> = ({
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
  const renderCurrentPagination = useMemo(
    () =>
      !typeList && (
        <TextContent
          variant={Variant.TITLE_LARGE}
          title={String(resultData?.length ? currentPage : "")}
        />
      ),
    [currentPage, resultData?.length, typeList]
  );
  return (
    // onEndReachedThreshold={0.5} legato alla distanza dal fondo
    <>
      <View style={{ margin: 10 }}>
        <RenderTitle dataLength={resultData?.length} title={titleList} />
      </View>

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
        ListFooterComponent={() => renderCurrentPagination}
        data={resultData}
        //when touch the board

        onEndReachedThreshold={0}
        onEndReached={() =>
          !isFetching && currentPage < (totalPages as number)
            ? setCurrentPage((prev) => prev + 1)
            : null
        }
        renderItem={({ item: { id, title, poster_path } }) => (
          <DashboardCard
            key={id}
            id={id}
            title={title}
            poster_path={poster_path}
          />
        )}
        keyExtractor={({ id }) => id}
      />
    </>
  );
};
