import React from "react";
import { useRoute } from "@react-navigation/native";
import { useGetUpcomingMoviesByIdQuery } from "../../services/film";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IDetailsId } from "../../interfaces/IDetailsProps";
import { DetailsBanner } from "../../components/card/detailsBanner/DetailsBanner";
import { RenderEmptyList } from "../../components/listCards/utils/renderEmptyList/RenderEmptyList";
import { TypeList } from "../../constans/TypeList";

export const DetailsScreen = () => {
  const route = useRoute();

  const { movieId } = route.params as IDetailsId;
  const { data, error, isLoading } = useGetUpcomingMoviesByIdQuery(movieId);

  const isFavorite = useSelector(({ favoriteItems }: RootState) =>
    favoriteItems.favoriteList.some(({ id }) => id === movieId)
  );

  return data ? (
    <DetailsBanner
      key={data.id}
      id={movieId}
      title={data.title}
      overview={data.overview}
      backdrop_path={data.backdrop_path}
      vote_average={data.vote_average}
      genres={data.genres}
      isFavorite={isFavorite}
      poster_path={data.poster_path}
      videos={data.videos}
    />
  ) : (
    <RenderEmptyList
      isLoading={isLoading}
      error={error}
      typedList={TypeList.FAVORITE}
    />
  );
};
