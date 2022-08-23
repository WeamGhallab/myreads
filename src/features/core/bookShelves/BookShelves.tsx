import React from "react";
import PropTypes from "prop-types";

import { Book } from "../../../core/models/book-model";
import { useAppSelector } from "../../../store/hooks";
import BookShelf from "../../shared/bookShelf/BookShelf";

const BookShelves: React.FC<{ bookList: Book[] }> = props => {
  const bookShelves=useAppSelector(state=>state.books.bookShelves);

  return (
    <React.Fragment>
      {bookShelves.map(item => (
        <BookShelf
          key={item}
          bookList={props.bookList.filter(book => book.shelf === item)}
          shelfTitle={item}
        />
      ))}
    </React.Fragment>
  );
};

export default BookShelves;

BookShelves.propTypes = {
  bookList: PropTypes.any.isRequired
};
