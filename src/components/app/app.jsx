import React from 'react';

import ErrorBoundry from '../error-boundry';
import Spinner from '../spinner';
import {
  BookstoreServiceProvider,
} from '../bookstore-service-context';
import BookstoreService from '../../services/bookstore-service';

const bookstore = new BookstoreService();

const App = () => (
  <ErrorBoundry>
    <BookstoreServiceProvider value={bookstore}>
      <Spinner />
    </BookstoreServiceProvider>
  </ErrorBoundry>
);

export default App;
