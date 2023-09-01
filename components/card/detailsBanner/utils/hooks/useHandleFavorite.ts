import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  addDataListFavorite,
  removeDataListFavorite,
} from "../../../../../store/favoriteSlice";
import { IPropsDetailsBanner } from "../../../../../interfaces/IPropsCard";

export const useHandleFavorite = (props: IPropsDetailsBanner) => {
  const dataFavoriteList = useSelector(
    ({ favoriteItems }: RootState) => favoriteItems.favoriteList
  );
  const dispatch = useDispatch();
  return useCallback(async () => {
    try {
      const indexFavorite = dataFavoriteList.findIndex(
        (item) => item.id === props.id
      );
      if (indexFavorite !== -1) {
        await AsyncStorage.setItem(
          "favoriteItem",
          JSON.stringify(
            dataFavoriteList.filter((movie) => movie.id !== props.id)
          )
        );
        dispatch(removeDataListFavorite(indexFavorite));
        return;
      }
      await AsyncStorage.setItem(
        "favoriteItem",
        JSON.stringify([...dataFavoriteList, { ...props, isFavorite: true }])
      );
      dispatch(addDataListFavorite({ ...props, isFavorite: true }));
    } catch (error) {
      console.log(error);
    }
  }, [dataFavoriteList, dispatch, props]);
};
