import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import {
  addDataListFavorite,
  removeDataListFavorite,
} from "../../../../../store/favoriteSlice";
import { IPropsDetailsBanner } from "../../../../../interfaces/IPropsCard";
import { useHandleAsyncStorage } from "../../../../../screens/routing/utils/hooks/useHandleAsyncStorage";

export const useHandleFavorite = (props: IPropsDetailsBanner) => {
  const dataFavoriteList = useSelector(
    ({ favoriteItems }: RootState) => favoriteItems.favoriteList
  );
  const dispatch = useDispatch();
  const { setItem } = useHandleAsyncStorage();
  return useCallback(async () => {
    try {
      const indexFavorite = dataFavoriteList.findIndex(
        (item) => item.id === props.id
      );
      if (indexFavorite !== -1) {
        await setItem(
          "favoriteItem",
          JSON.stringify(
            dataFavoriteList.filter((movie) => movie.id !== props.id)
          )
        );
        dispatch(removeDataListFavorite(indexFavorite));
        return;
      }
      await setItem(
        "favoriteItem",
        JSON.stringify([...dataFavoriteList, { ...props, isFavorite: true }])
      );
      dispatch(addDataListFavorite({ ...props, isFavorite: true }));
    } catch (error) {
      console.log(error);
    }
  }, [dataFavoriteList, dispatch, props, setItem]);
};
