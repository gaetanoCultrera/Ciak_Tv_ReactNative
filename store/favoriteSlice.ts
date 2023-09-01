import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IPropsDetailsBanner } from "../interfaces/IPropsCard";

export interface DataFavorite {
  favoriteList: IPropsDetailsBanner[];
}

// Define the initial state using that type,mettere il tipo con isFavorite
const initialState: DataFavorite = {
  favoriteList: [],
};

export const favoriteSlice = createSlice({
  name: "favoriteItems",
  // `createSlice` will infer the state type from the `initialState` argument
  // non conviene andare a creare un altro reducer per la gestione del login dove prende lo stato e setta isLogged a true
  initialState,
  reducers: {
    //conviene fare cosi per la gestione di loading?
    //update
    addDataListFavorite: (
      { favoriteList },
      { payload }: PayloadAction<IPropsDetailsBanner>
    ) => {
      return {
        favoriteList: [...favoriteList, payload],
      };
    },
    handleLocalStorageReload: (
      _,
      { payload }: PayloadAction<IPropsDetailsBanner[]>
    ) => {
      return {
        favoriteList: [...payload],
      };
    },
    removeDataListFavorite: (
      { favoriteList },
      { payload }: PayloadAction<number>
    ) => {
      //crea un nuovo array escludento id e alla fine li unisce
      return {
        favoriteList: [
          ...favoriteList.slice(0, payload),
          ...favoriteList.slice(payload + 1),
        ],
      };
    },
    resetState: () => initialState,
  },
});

export const {
  addDataListFavorite,
  handleLocalStorageReload,
  removeDataListFavorite,
  resetState,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
