import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner';
import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';

const BookList = ({ books }) => (
  <ul className="book-list">
    {
      books.map((book) => (
        <li key={book.id}>
          <BookListItem book={book} />
        </li>
      ))
    }
  </ul>
);

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (error) {
      return <ErrorIndicator message={error} />;
    }

    if (loading) {
      return <Spinner />;
    }

    return <BookList books={books} />
  }
};

const mapStateToProps = ({ books, loading, error }) => ({
  books,
  loading,
  error,
});

const mapMethodsToProps = ({ getBooks }) => ({
  getData: getBooks,
})

const mapDispatchToProps = (dispatch, { getData }) => ({
  fetchBooks: fetchBooks(getData, dispatch)
});

export default compose(
  withBookstoreService(mapMethodsToProps),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
