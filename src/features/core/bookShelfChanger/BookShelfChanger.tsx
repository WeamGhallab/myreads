import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./BookShelfChanger.module.css";
import { Book } from "../../../core/models/book-model";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { updateBookdata } from "../../../store/actions/books-actions";
import { BookShelvesEnum } from "../../../core/enums/bookShelves-enum";

const BookShelfChanger: React.FC<{ book: Book }> = props => {
  const { book } = props;
  const [selectedShelfValue, setSelectedShelfValue] = useState(
    book.shelf || "none"
  );
  const dispatch = useAppDispatch();
  const bookShelves = useAppSelector(state => state.books.bookShelves);

  const changeBookShelfHandler = (event: any) => {
    const selectedValue = event.target.value;
    if (selectedValue !== book.shelf) {
      dispatch(updateBookdata(book, selectedValue));
    }
    setSelectedShelfValue(selectedValue);
  };

  return (
    <select
      className={classes["bookshelf-select"]}
      onChange={changeBookShelfHandler}
      value={selectedShelfValue}
    >
      <option value="" disabled>
        Move to...
      </option>
      {bookShelves.map(item => (
        <option key={item} value={item}>
          {BookShelvesEnum[item as keyof typeof BookShelvesEnum] || item}
        </option>
      ))}
      <option value="none">None</option>
    </select>
  );
};

export default BookShelfChanger;

BookShelfChanger.propTypes = {
  book: PropTypes.any.isRequired
};
