import React from "react";
import { RenderPropsTitle } from "../../../../interfaces/IRenderProps";
import { RenderTitle } from "./RenderTitle";
import { render } from "@testing-library/react-native";

const renderComponent = ({ title, dataLength }: RenderPropsTitle) =>
  render(<RenderTitle title={title} dataLength={dataLength} />);

describe("RenderTitle", () => {
  test("should renders correctly when dataLength is truthy", () => {
    const props: RenderPropsTitle = {
      title: "title test",
      dataLength: 5,
    };
    const { getByText } = renderComponent({ ...props });

    expect(getByText(props.title)).toBeDefined();
  });

  test("should does not render when dataLength is falsy", () => {
    const props: RenderPropsTitle = {
      title: "title test",
      dataLength: 0,
    };
    const { queryByText } = renderComponent({ ...props });

    expect(queryByText(props.title)).toBeNull();
  });
});
