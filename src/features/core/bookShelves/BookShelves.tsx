import React from "react";

import { useAppSelector } from "../../../store/hooks";
import BookShelf from "../../shared/bookShelf/BookShelf";

const BookShelves: React.FC= () => {
  const bookShelves=useAppSelector(state=>state.books.bookShelves);
  const bookList=useAppSelector(state=>state.books.books);

  return (
    <React.Fragment>
      {bookShelves.map(item => (
        <BookShelf
          key={item}
          bookList={bookList.filter(book => book.shelf === item)}
          shelfTitle={item}
        />
      ))}
    </React.Fragment>
  );
};

export default BookShelves;

