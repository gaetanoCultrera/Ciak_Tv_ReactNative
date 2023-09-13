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
  handleApp: () => void;
}

export interface IPropsRenderCamera {
  __startCamera: () => Promise<void>;
}
