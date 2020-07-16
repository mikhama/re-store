import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

class BookList extends Component {
  async componentDidMount() {
    const { getData, booksLoaded } = this.props;

    const data = await getData();

    booksLoaded(data);
  }

  render() {
    const { books, loading } = this.props;

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

const mapStateToProps = ({ books, loading }) => ({
  books,
  loading,
});

const mapMethodsToProps = ({ getBooks }) => ({
  getData: getBooks,
})

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(mapMethodsToProps),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
