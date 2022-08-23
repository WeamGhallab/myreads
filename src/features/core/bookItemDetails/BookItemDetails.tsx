import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CircularProgress } from "@mui/material";

import { Book } from "../../../core/models/book-model";
import { getSingle } from "../../../core/services/booksAPI-service";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { notificationsActions } from "../../../store/reducers/notifications-slice";

const BookItemDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [bookData, setBookData] = useState<Book>();
  const showSpinner = useAppSelector(state => state.notifications.showSpinner);
  const books = useAppSelector(state => state.books.books);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const bookData = books.find(i => i.id === id);
    if (bookData) {
      setBookData(bookData);
    } else {
      const updateBook = async () => {
        dispatch(notificationsActions.sendRequest());
        const data = await getSingle(id);
        dispatch(notificationsActions.clear());
        setBookData(data);
      };

      updateBook().catch(error => {
        dispatch(notificationsActions.getError(error));
      });
    }
  }, [id, dispatch, books]);

  if (showSpinner || !bookData) {
    return (
      <div className="centered text-centered">
        <CircularProgress size="10rem" />
      </div>
    );
  }

  return (
    <Card className="centered text-centered">
      <h2>{bookData.title}</h2>
      <p>{bookData.description}</p>
    </Card>
  );
};

export default BookItemDetails;
