import React from 'react';

import { withBookstoreService } from '../hoc';
import Spinner from '../spinner';;

const App = ({ getData }) => (
  <p>
    {getData().toString()}
  </p>
);

const mapBookMethodsToProps = ({ getBooks }) => ({
  getData: getBooks,
})

export default withBookstoreService(mapBookMethodsToProps)(App);
