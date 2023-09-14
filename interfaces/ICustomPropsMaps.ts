import { LocationObjectCoords } from "expo-location";

export interface ICustomPropsMaps {
  coords?: LocationObjectCoords;
  setCoords?: React.Dispatch<
    React.SetStateAction<LocationObjectCoords | undefined>
  >;
}
