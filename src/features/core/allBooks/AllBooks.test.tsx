import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import AllBooks from "./AllBooks";
import store from "../../../store";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

describe("renders All Books elements", () => {
  test("should have 'My Reads' title", () => {
    render(
      <Provider store={store}>
        <AllBooks />
      </Provider>
    );
    const titleEl = screen.getByText("My Reads");
    expect(titleEl).toBeInTheDocument();
  });

  test("should have sticky search button", () => {
    const { container } = render(
      <Provider store={store}>
        <AllBooks />
      </Provider>
    );
    const titleEls = container.getElementsByTagName("button");
    expect(titleEls).toHaveLength(1);
  });

  test("should have All Books result container", () => {
    const { container } = render(
      <Provider store={store}>
        <AllBooks />
      </Provider>
    );
    const resultsContainerEl = container.getElementsByClassName(
      "list-books-content"
    )[0];
    expect(resultsContainerEl).toBeInTheDocument();
  });
});

describe("render the All books page functionlity", () => {
  test("should open the search page if 'add a book' button clicked", () => {
    const { container } = render(
      <Provider store={store}>
        <AllBooks />
      </Provider>
    );
    const buttonEl = container.getElementsByTagName("button")[0];
    fireEvent.click(buttonEl);
    expect(mockHistoryPush).toHaveBeenCalledWith("/search");
  });

//   test("render the list item of books", async () => {
//     window.fetch = jest.fn();
//     window.fetch.mockResolvedValueOnce({
//       json: async () => [
//         {
//           id: "a1",
//           title: "test",
//           authors: [],
//           imageLinks: null,
//           averageRating: 0,
//           ratingsCount: 0
//         }
//       ]
//     });
//     const {container}=render(
//       <Provider store={store}>
//         <AllBooks />
//       </Provider>
//     );
//     const listItems = await container.getElementsByTagName("li");
//     expect(listItems).not.toHaveLength(0);
//   });
});
