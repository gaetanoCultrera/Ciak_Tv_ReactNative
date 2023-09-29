import React, { useCallback } from "react";
import { IPropsTextField } from "../../../../interfaces/index";
import { SearchTextField } from "../../../../components/searchTextField/SearchTextField";

export const useRenderInputText = () => {
  return useCallback(
    ({
      queryString,
      setQueryString,
      setIsScrolling,
      isScrolling,
    }: IPropsTextField) => (
      <SearchTextField
        isScrolling={isScrolling}
        queryString={queryString}
        setQueryString={setQueryString}
        setIsScrolling={setIsScrolling}
      />
    ),
    []
  );
};
