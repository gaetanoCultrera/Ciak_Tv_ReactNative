import React, { useState, useEffect } from "react";
import { useGetFilmBySearchQuery } from "../../services/film";
import { ListCards } from "../../components";
import { SafeAreaView } from "react-native";
import { containerSearch } from "./style";
import { useNavigation } from "@react-navigation/native";
import { useRenderInputText } from "./utils/hooks/useRenderInputText";
import { TypeList } from "../../constans/TypeList";

export const SearchScreen = () => {
  const navigation = useNavigation();
  const [queryString, setQueryString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: { results, total_pages } = {},
    error,
    isLoading,
    isFetching,
  } = useGetFilmBySearchQuery({
    queryString: queryString,
    pageNumber: currentPage,
  });
  const renderTextField = useRenderInputText();

  useEffect(() => {
    navigation.setOptions({
      header: () => renderTextField({ queryString, setQueryString }),
    });
  }, [navigation, queryString, renderTextField]);

  return (
    <SafeAreaView style={containerSearch}>
      <ListCards
        titleList={"Search By Name"}
        resultData={results}
        totalPages={total_pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoading={isLoading}
        error={error}
        isHorizontal={false}
        numColumn={2}
        isFetching={isFetching}
        typeList={TypeList.FAVORITE}
      />
    </SafeAreaView>
  );
};
