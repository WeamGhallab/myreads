import { Book } from "../../../core/models/book-model";
import BookItem from "../../shared/bookItem/BookItem";
import classes from "./BookShelf.module.css";

const BookShelf: React.FC<{ bookList: Book[]; shelfTitle: string }> = props => {
  return (
    <div className={classes["bookshelf"]}>
      <h2 className={classes["bookshelf-title"]}>{props.shelfTitle}</h2>
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
