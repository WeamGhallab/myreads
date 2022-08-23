import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./BookShelfChanger.module.css";
import { Book } from "../../../core/models/book-model";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { updateBookdata } from "../../../store/actions/books-actions";
import { BookShelvesEnum } from "../../../core/enums/bookShelves-enum";

const BookShelfChanger: React.FC<{ book: Book }> = props => {
  const [selectedShelfValue, setSelectedShelfValue] = useState(
    props.book.shelf || "none"
  );
  const dispatch = useAppDispatch();
  const bookShelves = useAppSelector(state => state.books.bookShelves);

  const changeBookShelfHandler = (event: any) => {
    const selectedValue = event.target.value;
    if (selectedValue !== props.book.shelf) {
      dispatch(updateBookdata(props.book, selectedValue));
    }
    setSelectedShelfValue(selectedValue);
  };

  return (
    <select
      className={classes["bookshelf-select"]}
      onChange={changeBookShelfHandler}
      value={selectedShelfValue}
    >
      <option value="none" disabled>
        Move to...
      </option>
      {bookShelves.map(item => (
        <option value={item}>
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
