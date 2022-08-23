import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import classes from "./BookSearch.module.css";
import SearchTextBar from "../../../components/searchTextBar/SearchTextBar";
import BookSearchResults from "../bookSearchResults/BookSearchResults";
import { getBooksdata } from "../../../store/actions/books-actions";

const BookSearch: React.FC = () => {
  const history = useHistory();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const showSpinner = useAppSelector(state => state.notifications.showSpinner);
  const books = useAppSelector(state => state.books.books);
  const booksLength = books.length;
  const dispatch = useAppDispatch();

  useEffect(() => {
    booksLength === 0 && dispatch(getBooksdata());
  }, [dispatch, booksLength]);

  const closeSearchHandler = () => {
    history.push("/");
  };

  const searchChangeHandler = async () => {
    const inputData =
      (searchInputRef &&
        searchInputRef.current &&
        searchInputRef.current.value) ||
      "";
    setSearchInputValue(inputData.trim());
  };

  return (
    <div className={classes["search-books"]}>
      <div className={classes["search-books-bar"]}>
        <SearchTextBar
          disabled={showSpinner}
          buttonWidth={50}
          buttonColor="#fff"
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
        <BookSearchResults searchValue={searchInputValue} />
      </div>
    </div>
  );
};

export default BookSearch;
