import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store";
import BookShelf from "./BookShelf";

describe("renders Book Shelf elements", () => {
  test("should have Book shelf title", () => {
    render(<BookShelf bookList={[]} shelfTitle="currently Reading" />);
    const titleEl = screen.getByText("currently Reading");
    expect(titleEl).toBeInTheDocument();
  });
  
  test("should have Book list in the book shelf", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BookShelf
            bookList={[
              {
                id: "b1",
                title: "test",
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
              }
            ]}
            shelfTitle="currently Reading"
          />
        </BrowserRouter>
      </Provider>
    );
    const itemsEl = screen.getAllByRole("listitem");
    expect(itemsEl).toHaveLength(1);
  });
});
