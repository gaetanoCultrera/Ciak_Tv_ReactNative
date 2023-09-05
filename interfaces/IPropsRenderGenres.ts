import { StyleProp, TextStyle } from "react-native";
import { Genre } from "./IResponseMovie";

export interface IPropsRenderGenres {
  genres: Genre[];
  otherItemStyle: StyleProp<TextStyle>;
}

export interface IPropsRenderVideo {
  key: string;
}

export interface IPropsRenderYoutubeButton {
  handleApp: () => Promise<void>;
}
