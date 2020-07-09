import React from 'react';

import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = (mapMethodsToProps) => (WrappedComponent) => (
  (props) => (
    <BookstoreServiceConsumer>
    {
      (bookstoreService) => {
        const serviceProps = mapMethodsToProps(bookstoreService);

        return (
          <WrappedComponent {...props} {...serviceProps} />
        )
      }
    }
    </BookstoreServiceConsumer>
  )
);

export default withBookstoreService;
