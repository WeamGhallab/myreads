import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from 'history';

import store from "../../../store";
import BookItem from "./BookItem";
import dummyBookImage from "../../../assets/images/book.jpg";

const book = {
  id: "b1",
  title: "book1",
  subtitle: "test",
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

describe("renders Book item elements", () => {
  test("should show Book item title", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BookItem book={book} showRating={false} />
        </BrowserRouter>
      </Provider>
    );
    const titleEl = screen.getByText("book1");
    expect(titleEl).toBeInTheDocument();
  });

  test("should show Book item dummy image if the imageLinks is null", () => {
   const {container}= render(
      <Provider store={store}>
        <BrowserRouter>
          <BookItem book={{...book,imageLinks:null}} showRating={false} />
        </BrowserRouter>
      </Provider>
    );
    const imageEl = container.getElementsByClassName("book-cover");
    expect(imageEl).toHaveLength(1);
    expect(imageEl[0]).toHaveStyle(`background-image: url(${dummyBookImage})`);

  });

  test("should not show Book item authors if book doesn't have authors", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <BookItem book={book} showRating={false} />
        </BrowserRouter>
      </Provider>
    );
    const authorsEl = container.getElementsByClassName("book-authors");
    expect(authorsEl).toHaveLength(0);
  });

  test("should  show Book item authors if the book with authors", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <BookItem book={{ ...book, authors: ["Ahmed"] }} showRating={false} />
        </BrowserRouter>
      </Provider>
    );
    const authorsEl = container.getElementsByClassName("book-authors");
    expect(authorsEl).toHaveLength(1);
  });

  test("should show Book item rating if send 'showRating' is true", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BookItem book={book} showRating={true} />
        </BrowserRouter>
      </Provider>
    );
    const ratingEl = screen.queryAllByTestId("StarBorderIcon");
    expect(ratingEl).not.toHaveLength(0);
  });

  test("should hide Book item rating if send 'showRating' is false", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BookItem book={book} showRating={false} />
        </BrowserRouter>
      </Provider>
    );
    const ratingEl = screen.queryAllByTestId("StarBorderIcon");
    expect(ratingEl).toHaveLength(0);
  });
  
  test("should the book item have a link to redirect to details page", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BookItem book={book} showRating={false} />
        </BrowserRouter>
      </Provider>
    );
    const linkEl = screen.getByText(book.title).closest('a');
    expect(linkEl).toHaveAttribute('href', `/books/${book.id}`)
  });
});

describe("render the book item functionlity", () => {
  test("should open book details page if the link be clicked", () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <BookItem book={book} showRating={false} />
        </Router>
      </Provider>
    );
    const linkEl = screen.getByRole('link');
    fireEvent.click(linkEl);
    expect(history.location.pathname).toBe(`/books/${book.id}`);
  });
});