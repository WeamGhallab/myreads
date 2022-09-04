import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import StickyRoundButton from "./StickyRoundButton";

describe("renders the sticky Rounded button", () => {
  test("should show the button", () => {
    render(
      <StickyRoundButton
        children="Add"
        tooltipText=""
        bottom={25}
        right={25}
        buttonColor="#2e7d32"
        buttonRadius={50}
        onClick={jest.fn()}
      />
    );
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
  test("should show the button text", () => {
    render(
      <StickyRoundButton
        children="Add"
        tooltipText=""
        bottom={25}
        right={25}
        buttonColor="#2e7d32"
        buttonRadius={50}
        onClick={jest.fn()}
      />
    );
    const buttonEl = screen.getByText("Add", { selector: "button" });
    expect(buttonEl).toBeInTheDocument();
  });
});

describe("renders the sticky Rounded button functionality", () => {
  test("should show the button tooltip", async () => {
    render(
      <StickyRoundButton
        children="+"
        tooltipText="Add a book"
        bottom={25}
        right={25}
        buttonColor="#2e7d32"
        buttonRadius={50}
        onClick={jest.fn()}
      />
    );
    const buttonEl = screen.getByRole("button");
    fireEvent.mouseOver(buttonEl);
    await waitFor(() => {
      expect(screen.queryByText("Add a book")).toBeInTheDocument();
    });
  });
  test("should the button be clicked", () => {
    const mockFn = jest.fn();
    render(
      <StickyRoundButton
        children="Add"
        tooltipText=""
        bottom={25}
        right={25}
        buttonColor="#2e7d32"
        buttonRadius={50}
        onClick={mockFn}
      />
    );
    const buttonEl = screen.getByRole("button");
    fireEvent.click(buttonEl);
    expect(mockFn).toBeCalled();
  });
});
