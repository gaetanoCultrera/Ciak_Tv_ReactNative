import React, { useCallback } from "react";
import { IPropsTextField } from "../../../../interfaces/index";
import { SearchTextField } from "../../../../components/searchTextField/SearchTextField";

export const useRenderInputText = () => {
  return useCallback(
    ({ queryString, setQueryString, setIsScrolling }: IPropsTextField) => (
      <SearchTextField
        queryString={queryString}
        setQueryString={setQueryString}
        setIsScrolling={setIsScrolling}
      />
    ),
    []
  );
};
