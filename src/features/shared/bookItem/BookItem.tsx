import React from "react";
import PropTypes from "prop-types";

import classes from "./BookItem.module.css";
import { Book } from "../../../core/models/book-model";
import { Link } from "react-router-dom";
import dummyBookImage from "../../../assets/images/book.jpg";

const BookItem: React.FC<{ book: Book }> = props => {
  return (
    <div className={classes["book"]}>
      <div className={classes["book-top"]}>
        <div
          className={classes["book-cover"]}
          style={{
            backgroundImage: `url(${
              props.book.imageLinks
                ? props.book.imageLinks.thumbnail
                : dummyBookImage
            })`
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
      <div className={classes["book-title"]}>
        <Link to={`/books/${props.book.id}`}>{props.book.title}</Link>
      </div>
      {props.book.authors &&
        props.book.authors.map(name => (
          <div key={name} className={classes["book-authors"]}>
            {name}
          </div>
        ))}
    </div>
  );
};

export default BookItem;

BookItem.propTypes = {
  book: PropTypes.any.isRequired
};
