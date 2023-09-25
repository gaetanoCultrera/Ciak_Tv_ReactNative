import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import {
  addDataListFavorite,
  removeDataListFavorite,
} from "../../../../../store/favoriteSlice";
import { IPropsDetailsBanner } from "../../../../../interfaces/index";

export const useHandleFavorite = (props: IPropsDetailsBanner) => {
  const dataFavoriteList = useSelector(
    ({ favoriteItems }: RootState) => favoriteItems.favoriteList
  );
  const dispatch = useDispatch();

  return useCallback(() => {
    try {
      const indexFavorite = dataFavoriteList.findIndex(
        (item) => item.id === props.id
      );
      if (indexFavorite !== -1) {
        dispatch(removeDataListFavorite(indexFavorite));
        return;
      }

      dispatch(addDataListFavorite({ ...props, isFavorite: true }));
    } catch (error) {
      console.log(error);
    }
  }, [dataFavoriteList, dispatch, props]);
};
