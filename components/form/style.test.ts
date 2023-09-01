import { container } from "./style";

describe("styles", () => {
  test("should render component", () => {
    expect(container).toBeDefined();
  });

  test("container object has correct properties", () => {
    expect(container).toEqual({
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    });
  });
});
