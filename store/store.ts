import {
  configureStore,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import signupSlice from "./signupSlice";
import { filmApi } from "../services/film";
import favoriteSlice from "./favoriteSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const rootReducer = combineReducers({
  objectSignUp: signupSlice,
  [filmApi.reducerPath]: filmApi.reducer,
  favoriteItems: favoriteSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(filmApi.middleware),
  });

export const store = setupStore();

setupListeners(setupStore().dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
