const booksRequested = () => ({
  type: 'FETCH_BOOKS_REQUEST',
});

const booksLoaded = (newBooks) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks,
});

const booksNotLoaded = (message) => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: message,
});

const bookAddedToCart = (bookId) => ({
  type: 'BOOK_ADDED_TO_CART',
  payload: bookId,
});

const fetchBooks = (getData, dispatch) => async () => {
  dispatch(booksRequested());

  try {
    const data = await getData();

    dispatch(booksLoaded(data));
  } catch {
    dispatch(booksNotLoaded('Cannot load books from the store database'));
  }
}

export {
  fetchBooks,
  bookAddedToCart,
};
