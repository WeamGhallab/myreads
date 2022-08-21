import React from "react";
import PropTypes from "prop-types";

import classes from "./BookItem.module.css";
import { Book } from "../../../core/models/book-model";

const BookItem: React.FC<{ book: Book }> = props => {
  return (
    <div className={classes["book"]}>
      <div className={classes["book-top"]}>
        <div
          className={classes["book-cover"]}
          style={{
            width: 128,
            height: 192,
            backgroundImage: props.book.cover
          }}
        ></div>
        <div className={classes["book-shelf-changer"]}>
          <select>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className={classes["book-title"]}>{props.book.title}</div>
      <div className={classes["book-authors"]}>{props.book.author}</div>
    </div>
  );
};

export default BookItem;

BookItem.propTypes = {
  book: PropTypes.any.isRequired
};
