import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksNotLoaded } from '../../actions';
import { compose } from '../../utils';

class BookList extends Component {
  async componentDidMount() {
    const {
      getData,
      booksLoaded,
      booksRequested,
      booksNotLoaded,
    } = this.props;

    booksRequested();

    try {
      const data = await getData();

      booksLoaded(data);
    } catch {
      booksNotLoaded('Cannot load books from the store database');
    }
  }

  render() {
    const { books, loading, error } = this.props;

    if (error) {
      return <ErrorIndicator message={error} />;
    }

    if (loading) {
      return <Spinner />;
    }

    return (
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

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksNotLoaded,
};

export default compose(
  withBookstoreService(mapMethodsToProps),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
