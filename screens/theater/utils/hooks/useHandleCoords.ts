import { useState, useEffect, useCallback } from "react";
import {
  LocationObjectCoords,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

export const useHandleCoords = () => {
  const [dataCoords, setDataCoords] = useState<LocationObjectCoords>();

  const handlePermessions = useCallback(async () => {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const { coords } = await getCurrentPositionAsync();
      setDataCoords(coords);
    } else {
      alert("access denied");
    }
  }, []);

  useEffect(() => {
    void handlePermessions();
  }, [handlePermessions]);

  return dataCoords;
};
