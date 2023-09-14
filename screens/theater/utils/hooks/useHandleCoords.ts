import { useState, useEffect } from "react";
import {
  LocationObjectCoords,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

export const useHandleCoords = () => {
  const [dataCoords, setDataCoords] = useState<LocationObjectCoords>();

  const handlePermessions = async () => {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const { coords } = await getCurrentPositionAsync({});
      setDataCoords(coords);
    }
  };

  useEffect(() => {
    void handlePermessions();
  }, []);

  return dataCoords;
};
