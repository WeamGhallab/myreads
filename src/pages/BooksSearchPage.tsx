import { useHistory } from "react-router-dom";

const BookSearchPage: React.FC = () => {
  const history=useHistory();

  const closeSearchHandler = () => {
    history.push('/');
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={closeSearchHandler}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
};

export default BookSearchPage;
