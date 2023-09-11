import { useCallback } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../../../store/store";
import { useHandleAsyncStorage } from "../../../../../../screens/routing/utils/hooks/useHandleAsyncStorage";
import { updateObjectAuth } from "../../../../../../store/signupSlice";
export const useHandleImagePicker = () => {
  const dataUser = useSelector(
    ({ objectSignUp }: RootState) => objectSignUp.dataSignup
  );
  const dispatch = useDispatch();
  const { setItem } = useHandleAsyncStorage();
  return useCallback(async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //custom crop per l'anteprima non al quadrato ma direttamente nel cerchio
    if (granted) {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        base64: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!canceled) {
        await setItem(
          "userData",
          JSON.stringify({
            ...dataUser,
            uriProfileImg: assets[0].uri,
          })
        );
        dispatch(
          updateObjectAuth({
            ...dataUser,
            uriProfileImg: assets[0].uri,
          })
        );
      }
      return;
    }
    Alert.alert("Access denied");
  }, [dataUser, dispatch, setItem]);
};
