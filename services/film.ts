import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootFilm, RootFilmById } from "../interfaces/IResponseMovie";
import { ISearchQueryParams } from "../interfaces/ISearchQueryParams";

export const filmApi = createApi({
  reducerPath: "filmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzVkOTY3YmJhNzIwYmE0NDNhOWUyZWQ3MTNiZDA0MCIsInN1YiI6IjY0YjU0ZTQ5ZTBjYTdmMDE0NDJiMWFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fPSG25hezqUxnszHRVT6IXWKZpVYUYiFR08rfWPjA80`
      );
    },
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,

  endpoints: (builder) => ({
    getUpcomingMovies: builder.query<RootFilm, number>({
      query: (numberPage: number) => `/movie/upcoming?page=${numberPage}`,
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
