import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

export const useHandleAsyncStorage = () => {
  return useCallback(async (localStorageName: string) => {
    try {
      const localStorageData = await AsyncStorage.getItem(localStorageName);
      return localStorageData;
    } catch (error) {
      console.log(error);
    }
  }, []);
};
