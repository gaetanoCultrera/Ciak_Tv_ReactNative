import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootFilm, RootFilmById } from "../interfaces/IResponseMovie";
import { ISearchQueryParams } from "../interfaces/ISearchQueryParams";

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

  endpoints: (builder) => ({
    getUpcomingMovies: builder.query<RootFilm, number>({
      query: (numberPage: number) => `/movie/upcoming?page=${numberPage}`,
    }),

    getTopRatedMovies: builder.query<RootFilm, number>({
      query: (numberPage: number) => `/movie/top_rated?page=${numberPage}`,
    }),
    getPopularMovie: builder.query<RootFilm, number>({
      query: (numberPage: number) => `/movie/popular?page=${numberPage}`,
    }),
    getFilmBySearch: builder.query<RootFilm, ISearchQueryParams>({
      query: ({ queryString, pageNumber }) =>
        `/search/movie?query=${queryString.trim()}&page=${pageNumber}`,
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
