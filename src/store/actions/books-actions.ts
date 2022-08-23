import { Book } from "../../core/models/book-model";
import { getAll, update } from "../../core/services/booksAPI-service";
import { booksActions } from "../reducers/books-slice";
import { notificationsActions } from "../reducers/notifications-slice";

export const getBooksdata = () => {
  return async (dispatch: any) => {
    const updateBook = async () => {
      dispatch(notificationsActions.sendRequest());
      const data = await getAll();
      dispatch(notificationsActions.clear());
      dispatch(booksActions.addBooks(data));
      let bookShelves: string[] = [];
      data.forEach((element: Book) => {
        bookShelves.push(element.shelf);
      });
      bookShelves.length > 0 &&
        dispatch(booksActions.addBookShelves(Array.from(new Set(bookShelves))));
    };
    try {
      await updateBook();
    } catch (error) {
      dispatch(notificationsActions.getError(null));
    }
  };
};

export const updateBookdata = (book: Book, shelf: string) => {
  return async (dispatch: any) => {
    const updateBook = async () => {
      dispatch(notificationsActions.sendRequest());
      await update(book, shelf);
      dispatch(notificationsActions.getResponse());
      dispatch(booksActions.updateBookShelf({ ...book, shelf: shelf }));
    };
    try {
      await updateBook();
    } catch (error) {
      dispatch(notificationsActions.getError(null));
    }
  };
};
