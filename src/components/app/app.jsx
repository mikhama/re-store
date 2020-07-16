import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';
import Header from '../header';

const App = () => (
  <main className="container">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/card" component={CartPage} />
    </Switch>
  </main>
);

export default App;
