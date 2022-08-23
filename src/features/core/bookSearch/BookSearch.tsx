import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { search } from "../../../core/services/booksAPI-service";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { notificationsActions } from "../../../store/reducers/notifications-slice";
import { Book } from "../../../core/models/book-model";
import classes from "./BookSearch.module.css";
import SearchTextBar from "../../../components/searchTextBar/SearchTextBar";
import BookItem from "../../shared/bookItem/BookItem";

const BookSearch: React.FC = () => {
  const history = useHistory();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [filteredBooks, setfilteredBooks] = useState<Book[]>([]);
  const showSpinner = useAppSelector(state => state.notifications.showSpinner);
  const dispatch = useAppDispatch();

  const closeSearchHandler = () => {
    history.push("/");
  };

  const searchChangeHandler = async () => {
    const inputData =
      searchInputRef && searchInputRef.current && searchInputRef.current.value;
    if (inputData && inputData.trim()) {
      const updateBook = async () => {
        dispatch(notificationsActions.sendRequest());
        const data = await search(inputData, 8);
        dispatch(notificationsActions.clear());
        console.log(data);
        setfilteredBooks(data);
      };
      try {
        updateBook();
      } catch (error) {
        dispatch(notificationsActions.getError(error));
      }
    }
  };

  return (
    <div className={classes["search-books"]}>
      <div className={classes["search-books-bar"]}>
        <SearchTextBar
          disabled={showSpinner}
          buttonWidth={50}
          buttonColor="#fff"
          isButtonPositionRight={false}
          ref={searchInputRef}
          buttonTooltipText="Close"
          inputPlaceholder="Search by title, author, or ISBN"
          onClickButton={closeSearchHandler}
          onChangeText={searchChangeHandler}
        >
          <div className={classes["close-search-img"]}></div>
        </SearchTextBar>
      </div>
      <div className={classes["search-books-results"]}>
        <ol className={classes["books-grid"]}>
          {!showSpinner &&
            filteredBooks.length > 0 &&
            filteredBooks.map(item => (
              <li key={item.id}>
                <BookItem book={item} />
              </li>
            ))}
          {showSpinner && (
            <div className="centered text-centered">
              <CircularProgress size="10rem" />
            </div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default BookSearch;
