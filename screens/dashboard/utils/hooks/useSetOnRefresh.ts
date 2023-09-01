import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { filmApi } from "../../../../services/film";

export const useSetOnRefresh = (
  setRefreshing: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const dispatch = useDispatch();

  return useCallback(() => {
    setRefreshing(true);
    dispatch(filmApi.util.resetApiState());
    setRefreshing(false);
  }, [dispatch, setRefreshing]);
};
