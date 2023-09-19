import AsyncStorage from "@react-native-async-storage/async-storage";
import { initialState } from "../signupSlice";
import { IFormAuth } from "../../interfaces";

export const handleAsyncStorage = async (localStorageName: string) => {
  try {
    const storage = await AsyncStorage.getItem(localStorageName);
    return storage ? (JSON.parse(storage) as IFormAuth) : initialState;
  } catch (error) {
    console.log(error);
  }
};
