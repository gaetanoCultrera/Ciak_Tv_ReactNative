import { renderHook } from "@testing-library/react-native";
import { useRenderGenres } from "../useRenderGenres";
import { IPropsRenderGenres } from "../../../../../../interfaces/index";

describe("useRenderGenres", () => {
  test("should renders genres correctly", () => {
    const mockProps: IPropsRenderGenres = {
      genres: [
        { id: 1, name: "Action" },
        { id: 2, name: "Adventure" },
        { id: 3, name: "Comedy" },
      ],
      otherItemStyle: {},
    };

    const { result } = renderHook(() => useRenderGenres({ ...mockProps }));

    expect(result.current).toHaveLength(3);
  });
});
