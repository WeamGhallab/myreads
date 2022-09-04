import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import BookShelfChanger from "./BookShelfChanger";

const book = {
  id: "b1",
  title: "book1",
  subtitle: "test",
  authors: [],
  shelf: "currentlyReading",
  averageRating: 0,
  canonicalVolumeLink: "",
  categories: [],
  contentVersion: "",
  description: "",
  language: "",
  maturityRating: "",
  pageCount: 0,
  previewLink: "",
  printType: "",
  publishedDate: "",
  publisher: "",
  ratingsCount: 0,
  imageLinks: { smallThumbnail: "", thumbnail: "" },
  industryIdentifiers: [],
  panelizationSummary: {
    containsEpubBubbles: false,
    containsImageBubbles: false
  },
  readingModes: { image: false, text: false },
  infoLink: "",
  allowAnonLogging: false
};

describe("renders Book shelf changer dropdown list", () => {
  test("should show dropdown selection", () => {
    render(
      <Provider store={store}>
        <BookShelfChanger book={book} />
      </Provider>
    );
    const selectEl = screen.getByTestId("select");
    expect(selectEl).toBeInTheDocument;
  });

  test("should show dropdown selection with placeholder added to the first option and disabled", () => {
    render(
      <Provider store={store}>
        <BookShelfChanger book={book} />
      </Provider>
    );
    const placeholderEl = screen.getByText("Move to...");
    expect(placeholderEl).toBeInTheDocument;
    expect(placeholderEl).toBeDisabled();
  });

  test("should set default option from the book shelf 'currentlyReading'", () => {
    render(
      <Provider store={store}>
        <BookShelfChanger book={book} />
      </Provider>
    );
    const selectEl = screen.getByTestId("select");
    expect(selectEl).toHaveValue(book.shelf);
  });

  test("should correctly set default option 'none' if the book shelf is null", () => {
    const {shelf: _, ...newBookObj} = book;
    render(
      <Provider store={store}>
        <BookShelfChanger book={newBookObj} />
      </Provider>
    );
    const selectEl = screen.getByTestId("select");
    expect(selectEl).toHaveValue('none');
  });
});

describe("renders Book shelf changer functionality", () => {
  test("should correctly set user option", () => {
    render(
      <Provider store={store}>
        <BookShelfChanger book={book} />
      </Provider>
    );
    const selectOptionEl = screen.getByTestId(book.shelf);
    fireEvent.change(selectOptionEl, { target: { value: book.shelf } });
    const selectEl = screen.getByTestId("select");
    expect(selectEl).toHaveValue(book.shelf);
  });
});
