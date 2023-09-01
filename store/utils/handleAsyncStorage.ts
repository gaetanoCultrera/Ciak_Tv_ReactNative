import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleAsyncStorage = async (localStorageName: string) => {
  try {
    const localStorageData = await AsyncStorage.getItem(localStorageName);
    return localStorageData;
  } catch (error) {
    console.log(error);
  }
};
