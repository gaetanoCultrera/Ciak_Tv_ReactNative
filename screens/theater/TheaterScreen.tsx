import React from "react";
import { TheaterMaps } from "../../components/maps/TheaterMaps";
import { useHandleCoords } from "./utils/hooks/useHandleCoords";

export const TheaterScreen = () => {
  const dataCoords = useHandleCoords();

  return <TheaterMaps coords={dataCoords} />;
};
