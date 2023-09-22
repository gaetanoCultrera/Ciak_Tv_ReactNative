import React from "react";
import { render } from "@testing-library/react-native";
import { BannerCard } from "./BannerCard";

const renderComponent = () => render(<BannerCard />);

describe("TextContentRender", () => {
  test("should render component with correct props", () => {
    expect(renderComponent()).toBeDefined();
  });
});
