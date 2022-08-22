import React from "react";
import { Book } from "../../../core/models/book-model";
import { BookStatus } from "../../../core/models/lookup-model";
import BookShelf from "../../shared/bookShelf/BookShelf";
import classes from "./BookShelves.module.css";

const BOOK_STATUS_DUMMY_DATA: BookStatus[] = [
  { id: "s1", name: "Currently Reading" },
  { id: "s2", name: "Want To Read" },
  { id: "s3", name: "Read" }
];

const BookShelves: React.FC<{ bookList: Book[] }> = props => {
  return (
    <React.Fragment>
      {BOOK_STATUS_DUMMY_DATA.map(item => (
        <BookShelf
          key={item.id}
          bookList={props.bookList.filter(book => book.statusID == item.id)}
          shelfTitle={item.name}
        />
      ))}
    </React.Fragment>
  );
};

export default BookShelves;
