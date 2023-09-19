import React, { useEffect } from "react";
import { TheaterMaps } from "../../components/maps/TheaterMaps";
import { useHandleCoords } from "./utils/hooks/useHandleCoords";
import { useNavigation } from "@react-navigation/native";

export const TheaterScreen = () => {
  const navigation = useNavigation();
  const dataCoords = useHandleCoords();

  useEffect(() => {
    navigation.setOptions({ tabBarShowLabel: false });
  }, [navigation]);

  return <TheaterMaps coords={dataCoords} />;
};
