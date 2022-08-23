import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "./reducers/books-slice";
import { notificationsSlice } from "./reducers/notifications-slice";

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    notifications: notificationsSlice.reducer
  }
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
