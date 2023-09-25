import React from "react";
import { render } from "@testing-library/react-native";
import { IPropsBanner } from "../../interfaces/index";
import { TextContent } from "./TextContent";
import { Variant } from "../../constans/Variant";

const renderComponent = ({ title, variant, style }: IPropsBanner) =>
  render(<TextContent title={title} variant={variant} style={style} />);

describe("TextContentRender", () => {
  test("should render component with correct props", () => {
    const props: IPropsBanner = {
      title: "Test Title",
      variant: Variant.BODY_LARGE,
      style: { color: "red" },
    };

    const { getByText } = renderComponent({ ...props });

    expect(getByText(props.title)).toBeDefined();
  });
});
