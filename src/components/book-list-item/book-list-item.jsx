import React from 'react';

const BookListItem = ({ book }) => {
  const { title, author, img, price } = book;
  return (
    <div className="book-list-item">
      <img
        src={img}
        alt={`${title} by ${author}`}
      />
      <div className="book-props">
        <h3 className="title">{title}</h3>
        <span className="author">by {author}</span>
        <span className="price">${price}</span>
        <button type="button" className="btn btn-warning">Add to Cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
