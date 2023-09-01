import { StyleProp, TextStyle } from "react-native";
import { Genre } from "./IResponseMovie";

export interface IPropsRenderGenres {
  genres: Genre[];
  otherItemStyle: StyleProp<TextStyle>;
}
