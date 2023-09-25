import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { SearchTextField } from "./SearchTextField";
import { IPropsTextField } from "../../interfaces/index";

const renderComponent = ({ queryString, setQueryString }: IPropsTextField) =>
  render(
    <SearchTextField
      queryString={queryString}
      setQueryString={setQueryString}
    />
  );
describe("SearchTextField", () => {
  test("should render component with correct props", () => {
    const props = {
      queryString: "",
      setQueryString: jest.fn(),
    };
    expect(renderComponent({ ...props })).toBeDefined();
  });
  test("calls setQueryString correctly on text change", () => {
    const props = {
      queryString: "test",
      setQueryString: jest.fn(),
    };

    const { getByTestId } = renderComponent({ ...props });

    const newText = "new test query";
    fireEvent.changeText(getByTestId("customTextInput"), newText);

    expect(props.setQueryString).toHaveBeenCalledWith(newText);
  });
});
