import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  RootFilm,
  RootFilmById,
  ISearchQueryParams,
} from "../interfaces/index";

export const filmApi = createApi({
  reducerPath: "filmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`);
    },
  }),

  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["UpComing", "TopRated", "Popular", "Search", "UpComingById"],
  endpoints: (builder) => ({
    getUpcomingMovies: builder.query<RootFilm, number>({
      query: (numberPage: number) => `/movie/upcoming?page=${numberPage}`,
      providesTags: ["UpComing"],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (
        { results: resultsCache },
        { results, page, total_pages, total_results }
      ) => ({
        page: page,
        results: [...resultsCache, ...results],
        total_pages: total_pages,
        total_results: total_results,
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getTopRatedMovies: builder.query<RootFilm, number>({
      query: (numberPage: number) => `/movie/top_rated?page=${numberPage}`,
      providesTags: ["TopRated"],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (
        { results: resultsCache },
        { results, page, total_pages, total_results }
      ) => ({
        page: page,
        results: [...resultsCache, ...results],
        total_pages: total_pages,
        total_results: total_results,
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPopularMovie: builder.query<RootFilm, number>({
      query: (numberPage: number) => `/movie/popular?page=${numberPage}`,
      providesTags: ["Popular"],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (
        { results: resultsCache },
        { results, page, total_pages, total_results }
      ) => ({
        page: page,
        results: [...resultsCache, ...results],
        total_pages: total_pages,
        total_results: total_results,
      }),
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getFilmBySearch: builder.query<RootFilm, ISearchQueryParams>({
      query: ({ queryString, pageNumber }) =>
        `/search/movie?query=${queryString.trim()}&page=${pageNumber}`,
      providesTags: ["Search"],

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // arr.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i)
      merge: (
        { results: resultsCache },
        { results, page, total_pages, total_results },
        { arg: { isScrolling } }
      ) => {
        const mergedResult = isScrolling
          ? [...resultsCache, ...results].filter(
              (value, index, self) =>
                self.findIndex((value2) => value2.id === value.id) === index
            )
          : [...results];
        return {
          page: page,
          results: mergedResult,
          total_pages: total_pages,
          total_results: total_results,
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getUpcomingMoviesById: builder.query<RootFilmById, string>({
      query: (movieId: string) => `/movie/${movieId}?append_to_response=videos`,
    }),
  }),
});

export const {
  useGetUpcomingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetPopularMovieQuery,
  useGetUpcomingMoviesByIdQuery,
  useGetFilmBySearchQuery,
} = filmApi;
