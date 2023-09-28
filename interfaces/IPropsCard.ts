import React from "react";
import { CustomDataCard, Genre, Videos } from "./IResponseMovie";
import { Variant } from "../constans/Variant";
import { StyleProp, TextStyle } from "react-native";
import { TypeList } from "../constans/TypeList";

export interface IPropsCard {
  titleList: string;
  resultData?: CustomDataCard[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading?: boolean;
  totalPages?: number;
  error?: unknown;
  isHorizontal: boolean;
  numColumn?: number;
  isFetching: boolean;
  typeList?: TypeList;
  setIsScrolling?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPropsBanner {
  title: string;
  variant: Variant;
  style?: StyleProp<TextStyle>;
}

export interface IPropIcon {
  nameIcon: string;
  size: number;
}

export interface IPropProfileImage {
  uriProfileImg?: string;
  size: number;
}

export interface IPropsDetailsBanner {
  id: string;
  title: string;
  overview: string;
  backdrop_path: string;
  vote_average: number;
  genres: Genre[];
  poster_path: string;
  videos: Videos;
  isFavorite: boolean;
}
