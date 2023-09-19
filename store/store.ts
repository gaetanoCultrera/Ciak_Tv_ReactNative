import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupSlice from "./signupSlice";
import { filmApi } from "../services/film";
import favoriteSlice from "./favoriteSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import {
  preferitePersistConfig,
  securePersistConfig,
} from "./utils/common/persistsConfig";

const rootReducer = combineReducers({
  userData: persistReducer(securePersistConfig, signupSlice),
  favoriteItems: persistReducer(preferitePersistConfig, favoriteSlice),
  [filmApi.reducerPath]: filmApi.reducer,
});
//ho eliminato il preloadState per vedere se andava in conflitto e funziona
export const setupStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 128,
      },
    }).concat(filmApi.middleware),
});

export const persistor = persistStore(setupStore);

export type RootState = ReturnType<typeof rootReducer>;
