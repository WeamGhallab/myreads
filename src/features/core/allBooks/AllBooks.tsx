import React from "react";
import { useHistory } from "react-router-dom";
import StickyButton from "../../../components/ui/stickyButton/StickyButton";

import { Book } from "../../../core/models/book-model";
import BookShelves from "../bookShelves/BookShelves";
import classes from "./AllBooks.module.css";

const DUMMY_DATA: Book[] = [
  {
    id: "b1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    statusID: "s1",
    cover:
      'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
  },
  {
    id: "b2",
    title: "Ender's Game",
    author: "Orson Scott Card",
    statusID: "s2",
    cover:
      'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
  },
  {
    id: "b3",
    title: "Ender's Game",
    author: "Orson Scott Card",
    statusID: "s3",
    cover:
      'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
  }
];

const AllBooks: React.FC = () => {
  const history = useHistory();
  const searchBookHandler = () => {
    history.push("/search");
  };
  return (
    <div className={classes.container}>
      <div className={classes["list-books"]}>
        <div className={classes["list-books-title"]}>
          <h1>MyReads</h1>
        </div>
        <div className={classes["list-books-content"]}>
          <BookShelves bookList={DUMMY_DATA} />
        </div>
      </div>
      <StickyButton
        containerClass=""
        buttonColor="#2e7d32"
        onClick={searchBookHandler}
        tooltipText="Add a book"
      >
        <div className={classes["open-search-img"]}></div>
      </StickyButton>
    </div>
  );
};

export default AllBooks;
