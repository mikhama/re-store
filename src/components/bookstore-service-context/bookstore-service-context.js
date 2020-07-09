import { createContext } from 'react';

const {
  Consumer: BookstoreServiceConsumer,
  Provider: BookstoreServiceProvider,
} = createContext();

export { BookstoreServiceConsumer, BookstoreServiceProvider };
