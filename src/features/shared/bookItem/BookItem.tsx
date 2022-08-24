import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import classes from "./BookItem.module.css";
import { Book } from "../../../core/models/book-model";
import dummyBookImage from "../../../assets/images/book.jpg";
import BookShelfChanger from "../../core/bookShelfChanger/BookShelfChanger";
import { Rating } from "@mui/material";

const BookItem: React.FC<{ book: Book; showRating: boolean }> = props => {
  const { book, showRating } = props;

  return (
    <div className={classes["book"]}>
      <div className={classes["book-top"]}>
        <div
          className={classes["book-cover"]}
          style={{
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.thumbnail : dummyBookImage
            })`
          }}
        ></div>
        <div className={classes["book-shelf-changer"]}>
          <BookShelfChanger book={book} />
        </div>
      </div>
      <div className={classes["book-title"]}>
        <Link to={`/books/${book.id}`}>{book.title}</Link>
      </div>
      {book.authors &&
        book.authors.map(name => (
          <div key={name} className={classes["book-authors"]}>
            {name}
          </div>
        ))}
      {showRating && (
        <Rating name="read-only" value={book.averageRating} readOnly />
      )}
      {showRating && <i>vote: {book.ratingsCount || 0}</i>}
    </div>
  );
};

export default BookItem;

BookItem.propTypes = {
  book: PropTypes.any.isRequired,
  showRating: PropTypes.bool.isRequired
};
