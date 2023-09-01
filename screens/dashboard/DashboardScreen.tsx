import React, { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import {
  useGetTopRatedMoviesQuery,
  useGetPopularMovieQuery,
  useGetUpcomingMoviesQuery,
} from "../../services/film";
import { ListCards } from "../../components";
import { BannerCard } from "../../components/card/bannerCard/BannerCard";
import { SplashScreen } from "../../components/splashScreen/SplashScreen";
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
  } = useGetUpcomingMoviesQuery(currentPageUpComing);

  const {
    data: { results: resultsTopRated, total_pages: totalPagesTopRated } = {},
    error: errorTopRated,
    isLoading: isLoadingTopRated,
  } = useGetTopRatedMoviesQuery(currentPageTopRated);

  const {
    data: {
      results: resultsPopularMovies,
      total_pages: totalPagesPopularMovies,
    } = {},
    error: errorPopularMovies,
    isLoading: isLoadingPopularMovies,
  } = useGetPopularMovieQuery(currentPagePopularMovie);

  return (
    <>
      <SplashScreen
        isLoading={[
          isLoadingPopularMovies,
          isLoadingTopRated,
          isLoadingUpComing,
        ]}
      >
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
          />
        </ScrollView>
      </SplashScreen>
    </>
  );
};
