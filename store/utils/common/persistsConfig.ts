import createSecureStore from "redux-persist-expo-securestore";
import { Store } from "../../../constans/Store";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
const secureStorage = createSecureStore();

export const securePersistConfig = {
  key: Store.USERDATA,
  storage: secureStorage,
};

export const preferitePersistConfig = {
  key: Store.PREFERITE,
  storage: ExpoFileSystemStorage,
};
