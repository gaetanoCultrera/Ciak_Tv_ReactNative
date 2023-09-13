import { Dispatch, SetStateAction, useEffect } from "react";
import { BackHandler, Alert } from "react-native";

export const useHandleHardwareBackPressAndroid = (
  setShowCamera: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    //gesture android to back
    const backPressAndroid = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => setShowCamera(false) },
      ]);
      return true;
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      backPressAndroid
    );

    return () => subscription.remove();
  }, [setShowCamera]);
};
