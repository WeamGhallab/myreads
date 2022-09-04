import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import SearchTextBar from "./SearchTextBar";

describe("renders the Search input in the search bar", () => {
  test("should not show the input element without the input reference", () => {
    render(
      <SearchTextBar
        children="X"
        disabled={false}
        buttonWidth={50}
        buttonColor="#fff"
        ref={null}
        buttonTooltipText="Close"
        inputPlaceholder="Search by title, author, or ISBN"
        onClickButton={jest.fn()}
        onChangeText={jest.fn()}
      />
    );
    const inputEl = screen.queryByRole("input");
    expect(inputEl).not.toBeInTheDocument();
  });

  test("should show the input element when add reference", () => {
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(
      <SearchTextBar
        children="X"
        disabled={false}
        buttonWidth={50}
        buttonColor="#fff"
        ref={ref}
        buttonTooltipText="Close"
        inputPlaceholder="Search by title, author, or ISBN"
        onClickButton={jest.fn()}
        onChangeText={jest.fn()}
      />
    );
    expect(container.getElementsByTagName("input")).toHaveLength(1);
  });

  test("should the input element empty initially", () => {
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(
      <SearchTextBar
        children="X"
        disabled={false}
        buttonWidth={50}
        buttonColor="#fff"
        ref={ref}
        buttonTooltipText="Close"
        inputPlaceholder="Search by title, author, or ISBN"
        onClickButton={jest.fn()}
        onChangeText={jest.fn()}
      />
    );
    const inputEl = container.getElementsByTagName("input");
    expect(inputEl[0]).toHaveValue("");
  });

  test("should show the input element placeholder", () => {
    const ref = React.createRef<HTMLInputElement>();
    const { getByPlaceholderText } = render(
      <SearchTextBar
        children="X"
        disabled={false}
        buttonWidth={50}
        buttonColor="#fff"
        ref={ref}
        buttonTooltipText="Close"
        inputPlaceholder="Search by title, author, or ISBN"
        onClickButton={jest.fn()}
        onChangeText={jest.fn()}
      />
    );
    expect(
      getByPlaceholderText("Search by title, author, or ISBN")
    ).toBeInTheDocument();
  });

  test("should the input value be changed", () => {
    const inputMock = jest.fn();
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(
      <SearchTextBar
        children="X"
        disabled={false}
        buttonWidth={50}
        buttonColor="#fff"
        ref={ref}
        buttonTooltipText="Close"
        inputPlaceholder="Search by title, author, or ISBN"
        onClickButton={jest.fn()}
        onChangeText={inputMock}
      />
    );
    const inputEl = container.getElementsByTagName("input");
    fireEvent.change(inputEl[0], {
      target: { value: "new value" }
    });
    expect(inputMock).toBeCalled();
    expect(inputEl[0].value).toEqual("new value");
  });
  
  test("should the input value not be changed if disabled", () => {
    const inputMock = jest.fn();
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(
      <SearchTextBar
        children="X"
        disabled={true}
        buttonWidth={50}
        buttonColor="#fff"
        ref={ref}
        buttonTooltipText="Close"
        inputPlaceholder="Search by title, author, or ISBN"
        onClickButton={jest.fn()}
        onChangeText={inputMock}
      />
    );
    const inputEl = container.getElementsByTagName("input");
    expect(inputEl[0]).toBeDisabled();
  });
});

describe("renders the button in the Search bar", () => {
  test("should show the button element in the bar", () => {
    render(
      <SearchTextBar
        children="X"
        disabled={false}
        buttonWidth={50}
        buttonColor="#fff"
        ref={null}
        buttonTooltipText="Close"
        inputPlaceholder="Search by title, author, or ISBN"
        onClickButton={jest.fn()}
        onChangeText={jest.fn()}
      />
    );
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });

  test("should show the button element content in the bar", () => {
    render(
      <SearchTextBar
        children="X"
        disabled={false}
        buttonWidth={50}
        buttonColor="#fff"
        ref={null}
        buttonTooltipText="Close"
        inputPlaceholder="Search by title, author, or ISBN"
        onClickButton={jest.fn()}
        onChangeText={jest.fn()}
      />
    );
    const buttonEl = screen.getByText("X", { selector: "button" });
    expect(buttonEl).toBeInTheDocument();
  });

  test("should the button be clicked", () => {
    const btnMock = jest.fn();
    render(
      <SearchTextBar
        children="X"
        disabled={false}
        buttonWidth={50}
        buttonColor="#fff"
        ref={null}
        buttonTooltipText="Close"
        inputPlaceholder="Search by title, author, or ISBN"
        onClickButton={btnMock}
        onChangeText={jest.fn()}
      />
    );
    const buttonEl = screen.getByRole("button");
    fireEvent.click(buttonEl);
    expect(btnMock).toBeCalled();
  });

  test("should show the button tooltip in the bar", async () => {
    render(
      <SearchTextBar
        children="X"
        disabled={false}
        buttonWidth={50}
        buttonColor="#fff"
        ref={null}
        buttonTooltipText="Close"
        inputPlaceholder="Search by title, author, or ISBN"
        onClickButton={jest.fn()}
        onChangeText={jest.fn()}
      />
    );
    const buttonEl = screen.getByRole("button");
    fireEvent.mouseOver(buttonEl);
    await waitFor(() => {
      expect(screen.queryByText("Close")).toBeInTheDocument();
    });
  });
});
