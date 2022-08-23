import React, { useState, useRef, useEffect } from "react";
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
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [filteredBooks, setfilteredBooks] = useState<Book[]>([]);
  const showSpinner = useAppSelector(state => state.notifications.showSpinner);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let timeoutRef: any = null;
    if (searchInputValue.trim()) {
      const updateBook = async () => {
        dispatch(notificationsActions.sendRequest());
        const data = await search(searchInputValue);
        if (data.error) {
          throw new Error("No Results");
        }
        dispatch(notificationsActions.clear());
        console.log(data);
        setfilteredBooks(data);
      };
      timeoutRef = setTimeout(() => {
        updateBook().catch(error => {
          dispatch(notificationsActions.getError(error.message));
        });
      }, 1000);
      console.log("add");
    }
    return () => {
      console.log("cleanup");
      timeoutRef && clearTimeout(timeoutRef);
    };
  }, [searchInputValue, dispatch]);

  const closeSearchHandler = () => {
    history.push("/");
  };

  const searchChangeHandler = async () => {
    const inputData =
      searchInputRef && searchInputRef.current && searchInputRef.current.value;
    if (inputData && inputData.trim()) {
      setSearchInputValue(inputData);
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
            filteredBooks &&
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
