import { useCallback } from "react";
import { useHandleAsyncStorage } from "./useHandleAsyncStorage";
import { useDispatch } from "react-redux";
import { IPropsDetailsBanner } from "../../../../interfaces/IPropsCard";
import { handleLocalStorageReload } from "../../../../store/favoriteSlice";

export const useCheckFavoriteData = () => {
  const dispatch = useDispatch();
  const { getItem } = useHandleAsyncStorage();
  return useCallback(async () => {
    try {
      const favoriteList = await getItem("favoriteItem");
      if (favoriteList) {
        const parsedFavoriteList = JSON.parse(
          favoriteList
        ) as IPropsDetailsBanner[];
        if (parsedFavoriteList.length) {
          dispatch(handleLocalStorageReload(parsedFavoriteList));
        }
      }
    } catch (error) {
      console.error("error:", error);
    }
  }, [dispatch, getItem]);
};
