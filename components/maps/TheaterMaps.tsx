import React, { FC, useMemo } from "react";
import { ICustomPropsMaps } from "../../interfaces/ICustomPropsMaps";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const TheaterMaps: FC<ICustomPropsMaps> = ({ coords }) => {
  const renderMaps = useMemo(() => {
    return (
      <View style={{ flex: 1 }}>
        {coords && (
          <MapView
            style={{ flex: 1 }}
            region={{
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
              title="Your position"
            />
          </MapView>
        )}
      </View>
    );
  }, [coords]);
  return renderMaps;
};
