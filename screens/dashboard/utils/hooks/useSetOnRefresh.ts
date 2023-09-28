import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { filmApi } from "../../../../services/film";
import { ICustomRefreshProps } from "../../../../interfaces";

export const useSetOnRefresh = ({
  setCurrentPageUpComing,
  setCurrentTopRated,
  setCurrentPagePopularMovie,
}: ICustomRefreshProps) => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(filmApi.util.resetApiState());
    setCurrentPageUpComing(1);
    setCurrentTopRated(1);
    setCurrentPagePopularMovie(1);
  }, [
    dispatch,
    setCurrentPagePopularMovie,
    setCurrentPageUpComing,
    setCurrentTopRated,
  ]);
};
