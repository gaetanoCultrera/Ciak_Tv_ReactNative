import React, { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import {
  useGetTopRatedMoviesQuery,
  useGetPopularMovieQuery,
  useGetUpcomingMoviesQuery,
} from "../../services/film";
import { ListCards } from "../../components";
import { BannerCard } from "../../components/card/bannerCard/BannerCard";
import { useSetOnRefresh } from "./utils/hooks/useSetOnRefresh";

export const DashboardScreen = () => {
  const [currentPageUpComing, setCurrentPageUpComing] = useState(1);
  const [currentPageTopRated, setCurrentTopRated] = useState(1);
  const [currentPagePopularMovie, setCurrentPagePopularMovie] = useState(1);

  const onRefresh = useSetOnRefresh();

  const {
    data: { results: resultsUpComing, total_pages: totalPagesUpComing } = {},
    error: errorUpComing,
    isLoading: isLoadingUpComing,
    isFetching: isFetchingUpComing,
  } = useGetUpcomingMoviesQuery(currentPageUpComing);

  const {
    data: { results: resultsTopRated, total_pages: totalPagesTopRated } = {},
    error: errorTopRated,
    isLoading: isLoadingTopRated,
    isFetching: isFetchingTopRated,
  } = useGetTopRatedMoviesQuery(currentPageTopRated);

  const {
    data: {
      results: resultsPopularMovies,
      total_pages: totalPagesPopularMovies,
    } = {},
    error: errorPopularMovies,
    isLoading: isLoadingPopularMovies,
    isFetching: isFetchingPopularMovies,
  } = useGetPopularMovieQuery(currentPagePopularMovie);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={
            isLoadingUpComing || isLoadingPopularMovies || isLoadingTopRated
          }
          onRefresh={onRefresh}
          progressBackgroundColor={"white"}
        />
      }
    >
      <BannerCard />
      <ListCards
        resultData={resultsUpComing}
        titleList={"UpComing"}
        currentPage={currentPageUpComing}
        setCurrentPage={setCurrentPageUpComing}
        isLoading={isLoadingUpComing}
        totalPages={totalPagesUpComing}
        error={errorUpComing}
        isHorizontal={true}
        isFetching={isFetchingUpComing}
      />
      <ListCards
        resultData={resultsTopRated}
        titleList={"TopRated"}
        currentPage={currentPageTopRated}
        setCurrentPage={setCurrentTopRated}
        isLoading={isLoadingTopRated}
        totalPages={totalPagesTopRated}
        error={errorTopRated}
        isHorizontal={true}
        isFetching={isFetchingTopRated}
      />
      <ListCards
        resultData={resultsPopularMovies}
        titleList={"Popular Movies"}
        currentPage={currentPagePopularMovie}
        setCurrentPage={setCurrentPagePopularMovie}
        isLoading={isLoadingPopularMovies}
        totalPages={totalPagesPopularMovies}
        error={errorPopularMovies}
        isHorizontal={true}
        isFetching={isFetchingPopularMovies}
      />
    </ScrollView>
  );
};
