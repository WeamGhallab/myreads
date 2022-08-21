import { Book } from "../../../core/models/book-model";
import BookItem from "../../shared/bookItem/BookItem";
import BookShelf from "../../shared/bookShelf/BookShelf";
import classes from "./AllBooks.module.css";

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

const AllBooks: React.FC = () => {
  return (
    <div className={classes["list-books"]}>
      <div className={classes["list-books-title"]}>
        <h1>MyReads</h1>
      </div>
      <div className={classes["list-books-content"]}>
        <BookShelf bookList={DUMMY_DATA} shelfTitle="Currently Reading" />
        <BookShelf bookList={DUMMY_DATA} shelfTitle="Want to Read" />
        <BookShelf bookList={DUMMY_DATA} shelfTitle="Read" />
      </div>
    </div>
  );
};

export default AllBooks;
