import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";

import { search } from "../../../core/services/booksAPI-service";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { notificationsActions } from "../../../store/reducers/notifications-slice";
import { Book } from "../../../core/models/book-model";
import classes from "./BookSearchResults.module.css";
import BookItem from "../../shared/bookItem/BookItem";

const BookSearchResults: React.FC<{ searchValue: string }> = props => {
  const { searchValue } = props;
  const [filteredBooks, setfilteredBooks] = useState<Book[]>([]);
  const showSpinner = useAppSelector(state => state.notifications.showSpinner);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let timeoutRef: any = null;
    const updateBook = async () => {
      dispatch(notificationsActions.sendRequest());
      const data: any = await search(searchValue);
      if (data.error) {
        throw new Error("No Results");
      }
      dispatch(notificationsActions.clear());
      setfilteredBooks(data);
    };
    if (searchValue) {
      timeoutRef = setTimeout(() => {
        updateBook().catch(error => {
          dispatch(notificationsActions.getError(error.message));
          setfilteredBooks([]);
        });
      }, 800);
    } else {
      setfilteredBooks([]);
    }
    return () => {
      timeoutRef && clearTimeout(timeoutRef);
    };
  }, [searchValue, dispatch]);

  return (
    <ol className={classes["books-grid"]}>
      {!showSpinner &&
        filteredBooks &&
        filteredBooks.length > 0 &&
        filteredBooks.map(item => (
          <li key={item.id}>
            <BookItem book={item} />
          </li>
        ))}
      {showSpinner && (
        <div className="centered text-centered">
          <CircularProgress color="success" size="10rem" />
        </div>
      )}
    </ol>
  );
};

export default BookSearchResults;

BookSearchResults.propTypes = {
  searchValue: PropTypes.string.isRequired
};
