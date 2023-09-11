import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

export const useHandleAsyncStorage = () => {
  const getItem = useCallback(async (localStorageName: string) => {
    try {
      const localStorageData = await AsyncStorage.getItem(localStorageName);
      return localStorageData;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setItem = useCallback(
    async (localStorageName: string, value: string) => {
      try {
        const localStorageData = await AsyncStorage.setItem(
          localStorageName,
          value
        );
        return localStorageData;
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  return { getItem, setItem };
};
