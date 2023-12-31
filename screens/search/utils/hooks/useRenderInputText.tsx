import React, { useCallback } from "react";
import { IPropsTextField } from "../../../../interfaces/IPropsTextField";
import { SearchTextField } from "../../../../components/searchTextField/SearchTextField";

export const useRenderInputText = () => {
  return useCallback(
    ({ queryString, setQueryString }: IPropsTextField) => (
      <SearchTextField
        queryString={queryString}
        setQueryString={setQueryString}
      />
    ),
    []
  );
};
