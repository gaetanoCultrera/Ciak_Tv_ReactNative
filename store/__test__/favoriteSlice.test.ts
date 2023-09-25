import { IPropsDetailsBanner } from "../../interfaces/index";
import FavoriteSlice, {
  resetState,
  addDataListFavorite,
  handleLocalStorageReload,
  removeDataListFavorite,
  DataFavorite,
} from "../favoriteSlice";

const initialState = {
  favoriteList: [],
};

const objectFavorite: IPropsDetailsBanner = {
  backdrop_path: "image path",
  genres: [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "Comedy" },
  ],
  id: "999",
  isFavorite: false,
  overview: "text overview ",
  poster_path: "poster path url",
  title: "title text",
  vote_average: 9,
};

const prevState: DataFavorite = {
  favoriteList: [objectFavorite],
};

describe("favoriteSlice", () => {
  test("should handle adding data to the favorite list", () => {
    expect(
      FavoriteSlice(initialState, addDataListFavorite(objectFavorite))
    ).toEqual({ favoriteList: [objectFavorite] });
  });
  test("should remove item from Favorite", () => {
    const mockIndex = 0;
    expect(FavoriteSlice(prevState, removeDataListFavorite(mockIndex))).toEqual(
      {
        favoriteList: [],
      }
    );
  });
  test("should handle backup data in local storage", () => {
    expect(
      FavoriteSlice(prevState, handleLocalStorageReload(prevState.favoriteList))
    ).toEqual({
      favoriteList: [objectFavorite],
    });
  });
  test("should handle reset state", () => {
    expect(FavoriteSlice(prevState, resetState())).toEqual(initialState);
  });
});
