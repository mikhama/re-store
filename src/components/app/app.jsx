import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';
import { withBookstoreService } from '../hoc';
import Spinner from '../spinner';;

const App = () => (
  <div>
    <nav>
      <Link to="/">Home </Link>
      <Link to="/card">Card</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/card" component={CartPage} />
    </Switch>
  </div>
);

export default App;
