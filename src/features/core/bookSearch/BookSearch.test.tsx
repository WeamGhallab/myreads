import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";

import BookSearch from "./BookSearch";
import store from "../../../store";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

describe("renders the Book Searchelements", () => {
  test("should have search bar container", () => {
    const { container } = render(
      <Provider store={store}>
        <BookSearch />
      </Provider>
    );
    const searchBarEl = container.getElementsByClassName("search-books-bar")[0];
    expect(searchBarEl).toBeInTheDocument();
  });

  test("should show the search bar empty input element", () => {
    const { container } = render(
      <Provider store={store}>
        <BookSearch />
      </Provider>
    );
    const inputEls = container.getElementsByTagName("input");
    expect(inputEls).toHaveLength(1);
    expect(inputEls[0].value).toEqual("");
  });

  test("should show the search bar close button", () => {
    const { container } = render(
      <Provider store={store}>
        <BookSearch />
      </Provider>
    );
    const buttonEls = container.getElementsByTagName("button");
    expect(buttonEls).toHaveLength(1);
  });

  test("should have search result container", () => {
    const { container } = render(
      <Provider store={store}>
        <BookSearch />
      </Provider>
    );
    const searchResultsEl = container.getElementsByClassName(
      "search-books-results"
    )[0];
    expect(searchResultsEl).toBeInTheDocument();
  });
});

describe("update the Book Search page", () => {
  test("should updated the input value with typed value", () => {
    const { container } = render(
      <Provider store={store}>
        <BookSearch />
      </Provider>
    );
    const inputEl = container.getElementsByTagName("input")[0];
    fireEvent.change(inputEl, { target: { value: "new value" } });
    expect(inputEl.value).toEqual("new value");
  });

  test("should close the search page if close button clicked", () => {
    const { container } = render(
      <Provider store={store}>
        <BookSearch />
      </Provider>
    );
    const buttonEl = container.getElementsByTagName("button")[0];
    fireEvent.click(buttonEl);
    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  });
});
