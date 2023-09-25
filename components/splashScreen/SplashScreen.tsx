import React, { FC, useMemo, useEffect } from "react";
import { IPropsSplashScreen } from "../../interfaces/index";
import data from "../../assets/animation/ciak.json";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

//COMPONENTE NON UTILIZZATO MA UTILE
export const SplashScreen: FC<IPropsSplashScreen> = ({
  children,
  isLoading,
}) => {
  const navigation = useNavigation();
  const isShouldHide = isLoading.some((value) => value);

  const renderSplashScreen = useMemo(() => {
    if (isShouldHide) return <LottieView source={data} autoPlay loop />;
    return children;
  }, [children, isShouldHide]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: !isShouldHide,
      tabBarStyle: {
        display: isShouldHide ? "none" : "flex",
      },
    });
  }, [isLoading, isShouldHide, navigation]);

  return renderSplashScreen;
};
