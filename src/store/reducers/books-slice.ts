import { createSlice } from "@reduxjs/toolkit";

import { Book } from "../../core/models/book-model";

const initialState: { books: Book[]; bookShelves: string[] } = {
  books: [],
  bookShelves: []
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBookShelves(state, action) {
      const bookShelves = action.payload;
      state.bookShelves = bookShelves || [];
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
      }
    }
  }
});
export const booksActions = booksSlice.actions;
