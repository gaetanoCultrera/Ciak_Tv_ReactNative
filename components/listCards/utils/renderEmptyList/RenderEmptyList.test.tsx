import React from "react";
import { RenderPropsEmptyList } from "../../../../interfaces/IRenderProps";
import { render } from "@testing-library/react-native";
import { RenderEmptyList } from "./RenderEmptyList";

const renderComponent = ({ error, isLoading }: RenderPropsEmptyList) =>
  render(<RenderEmptyList error={error} isLoading={isLoading} />);

describe("RenderEmptyList", () => {
  test("should render SpinnerLoading when isLoading is true", () => {
    const propsComponent: RenderPropsEmptyList = {
      isLoading: true,
      error: null,
    };

    const { getByTestId } = renderComponent({ ...propsComponent });
    expect(getByTestId("customSpinner")).toBeDefined();
  });

  test("should render error message when error is present", () => {
    const propsComponent: RenderPropsEmptyList = {
      isLoading: false,
      error: { data: { status_message: "Test Error Message" } },
    };
    const { getByText } = renderComponent({ ...propsComponent });

    expect(getByText("Test Error Message")).toBeDefined();
  });
});
