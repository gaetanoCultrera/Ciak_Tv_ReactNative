import React, { useState, useEffect } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObjectCoords,
} from "expo-location";

export const TheaterScreen = () => {
  const [coords, setCoords] = useState<LocationObjectCoords>();

  useEffect(() => {
    void (async () => {
      const { granted } = await requestForegroundPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({});
        setCoords(coords);
      }
    })();
  }, []);
  //funziona con un dispositivo alla volta, utilizza expo go
  return (
    <View style={{ flex: 1 }}>
      {coords && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: coords.latitude,
              longitude: coords.longitude,
            }}
            title="La tua posizione"
          />
        </MapView>
      )}
    </View>
  );
};
