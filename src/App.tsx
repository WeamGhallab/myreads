import "./App.css";
import { useState } from "react";

import StickyButton from "./components/ui/stickyButton/StickyButton";
import { Book } from "./core/models/book-model";
import BookItem from "./features/shared/bookItem/BookItem";

const DUMMY_DATA: Book[] = [
  {
    id: "b1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    statusID: "1",
    cover:
      'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
  },
  {
    id: "b2",
    title: "Ender's Game",
    author: "Orson Scott Card",
    statusID: "1",
    cover:
      'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
  }
];

const App: React.FC = () => {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {DUMMY_DATA.map(item => (
                      <li key={item.id}>
                        <BookItem book={item} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {DUMMY_DATA.map(item => (
                      <li key={item.id}>
                        <BookItem book={item} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {DUMMY_DATA.map(item => (
                      <li key={item.id}>
                        <BookItem book={item} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <StickyButton
            containerClass=""
            buttonClass="open-search"
            onClick={() => setShowSearchpage(!showSearchPage)}
            tooltipText="Add a book"
          >
            <div className="open-search-img"></div>
          </StickyButton>
        </div>
      )}
    </div>
  );
};

export default App;
