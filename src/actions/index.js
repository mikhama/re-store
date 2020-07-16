const booksLoaded = (newBooks) => (
  {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  }
);

const booksRequested = () => (
  {
    type: 'BOOKS_REQUESTED',
  }
);

const booksNotLoaded = (message) => (
  {
    type: 'BOOKS_NOT_LOADED',
    payload: message,
  }
);

export {
  booksLoaded,
  booksRequested,
  booksNotLoaded,
};
