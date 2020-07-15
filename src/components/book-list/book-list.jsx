import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

class BookList extends Component {
  componentDidMount() {
    const { getData, booksLoaded } = this.props;

    const data = getData();

    booksLoaded(data);
  }

  render() {
    const { books } = this.props;

    return (
      <ul>
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

const mapStateToProps = ({ books}) => ({
  books,
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
