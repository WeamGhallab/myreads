import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import StickyRoundButton from "../../../components/stickyRoundButton/StickyRoundButton";
import { getBooksdata } from "../../../store/actions/books-actions";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import BookShelves from "../bookShelves/BookShelves";
import classes from "./AllBooks.module.css";

const AllBooks: React.FC = () => {
  const history = useHistory();
  const showSpinner = useAppSelector(state => state.notifications.showSpinner);
  const books = useAppSelector(state => state.books.books);
  const booksLength = books.length;
  const dispatch = useAppDispatch();

  useEffect(() => {
    booksLength === 0 && dispatch(getBooksdata());
  }, [dispatch, booksLength]);

  const searchBookHandler = () => {
    history.push("/search");
  };

  return (
    <div className={classes.container}>
      <div className={classes["list-books"]}>
        <div className={classes["list-books-title"]}>
          <h1>My Reads</h1>
        </div>
        <div className={classes["list-books-content"]}>
          {!showSpinner && <BookShelves bookList={books} />}
          {showSpinner && (
            <div className="centered text-centered">
              <CircularProgress size="10rem" />
            </div>
          )}
        </div>
      </div>
      <StickyRoundButton
        bottom={25}
        right={25}
        buttonRadius={50}
        buttonColor="#2e7d32"
        onClick={searchBookHandler}
        tooltipText="Add a book"
      >
        <div className={classes["open-search-img"]}></div>
      </StickyRoundButton>
    </div>
  );
};

export default AllBooks;
