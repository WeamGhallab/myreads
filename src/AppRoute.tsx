import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import BookDetailsPage from "./pages/BookDetailsPage";
import BooksListPage from "./pages/BooksListPage";
import BooksSearchPage from "./pages/BooksSearchPage";

const AppRoute: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/books" />
      </Route>
      <Route path="/books" exact>
        <BooksListPage />
      </Route>
      <Route path="/books/:id">
        <BookDetailsPage />
      </Route>
      <Route path="/search">
        <BooksSearchPage />
      </Route>
      <Route path="*">
        <div className="centered text-centered">
          <h2>404: No Page Found!!</h2>
        </div>
      </Route>
    </Switch>
  );
};

export default AppRoute;
