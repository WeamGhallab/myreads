import { BookShelvesEnum } from "../../../core/enums/bookShelves-enum";
import { Book } from "../../../core/models/book-model";
import BookItem from "../../shared/bookItem/BookItem";
import classes from "./BookShelf.module.css";

const BookShelf: React.FC<{ bookList: Book[]; shelfTitle: string }> = props => {
  const bookShelfName =
    BookShelvesEnum[props.shelfTitle as keyof typeof BookShelvesEnum] ||
    props.shelfTitle;
  return (
    <div className={classes["bookshelf"]}>
      <h2 className={classes["bookshelf-title"]}>{bookShelfName}</h2>
      <div className={classes["bookshelf-books"]}>
        <ol className={classes["books-grid"]}>
          {props.bookList.map(item => (
            <li key={item.id}>
              <BookItem book={item} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
