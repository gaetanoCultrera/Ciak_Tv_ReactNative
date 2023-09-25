/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { DashboardCard } from "./DashboardCard";
import { CustomDataCard } from "../../../interfaces/index";

const mockNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

const renderComponent = ({ id, poster_path, title }: CustomDataCard) =>
  render(<DashboardCard id={id} title={title} poster_path={poster_path} />);

describe("DashboardCard", () => {
  test("should renders correctly with provided props", () => {
    const mockProps: CustomDataCard = {
      id: "123",
      title: "Test Movie Title",
      poster_path: "test-poster-path",
    };

    const { getByText, getByTestId } = renderComponent({ ...mockProps });

    expect(getByText("Test Movie Title")).toBeDefined();
    expect(getByTestId("cardImage")).toBeDefined();

    fireEvent.press(getByTestId("cardImage"));

    expect(mockNavigate).toHaveBeenCalledWith("Details", { movieId: "123" });
  });
  test("should renders with default image when poster_path is not present", () => {
    const mockProps: CustomDataCard = {
      id: "123",
      title: "Test Movie Title",
      poster_path: undefined,
    };

    const { getByText, getByTestId } = renderComponent({ ...mockProps });

    expect(getByText("Test Movie Title")).toBeDefined();
    expect(getByTestId("cardImage")).toBeDefined();

    fireEvent.press(getByTestId("cardImage"));

    expect(mockNavigate).toHaveBeenCalledWith("Details", { movieId: "123" });
  });
});
