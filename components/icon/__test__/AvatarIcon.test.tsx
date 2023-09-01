import React from "react";
import { render } from "@testing-library/react-native";
import { AvatarIcon } from "../AvatarIcon";
import { IPropIcon } from "../../../interfaces/IPropsCard";

const renderComponent = ({ nameIcon }: IPropIcon) =>
  render(<AvatarIcon nameIcon={nameIcon} />);

describe("Custom Avatar Icon render", () => {
  test("should render component ", () => {
    const nameIcon = "icon test";

    expect(renderComponent({ nameIcon })).toBeDefined();
  });
});
