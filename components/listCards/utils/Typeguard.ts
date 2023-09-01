import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

export const isFetchBaseQueryError = (
  errorValue: unknown
): errorValue is FetchBaseQueryError => {
  return (errorValue as FetchBaseQueryError).data !== undefined;
};
