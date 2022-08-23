import { createSlice } from "@reduxjs/toolkit";

import { Book } from "../../core/models/book-model";

 //TODO: set book shelves from lookup API
const INIT_BOOK_SHELVES_DATA = ["currentlyReading", "wantToRead", "read"];

const initialState: { books: Book[]; bookShelves: string[] } = {
  books: [],
  bookShelves: [...INIT_BOOK_SHELVES_DATA]
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBookShelves(state, action) {
      const bookShelves = action.payload;
      state.bookShelves = bookShelves || [...INIT_BOOK_SHELVES_DATA];
    },
    addBooks(state, action) {
      const books = action.payload;
      state.books = books || [];
    },
    updateBookShelf(state, action) {
      const updatedBook: Book = action.payload;
      const bookIndex = state.books.findIndex(i => i.id === updatedBook.id);
      if (bookIndex > -1) {
        state.books[bookIndex].shelf = updatedBook.shelf;
      } else if (state.books.length > 0) {
        state.books.push(updatedBook);
      }
    }
  }
});
export const booksActions = booksSlice.actions;
