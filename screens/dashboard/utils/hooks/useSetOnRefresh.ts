import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { filmApi } from "../../../../services/film";

export const useSetOnRefresh = () => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(filmApi.util.resetApiState());
  }, [dispatch]);
};
