import React from "react";
import { render } from "@testing-library/react-native";
import { SpinnerLoading } from "./SpinnerLoading";
import { IPropsSpinner } from "../../interfaces/index";

const renderComponent = ({ color }: IPropsSpinner) =>
  render(<SpinnerLoading color={color} />);

describe("TextContentRender", () => {
  test("should render component ", () => {
    const color = "color";

    expect(renderComponent({ color })).toBeDefined();
  });
});
