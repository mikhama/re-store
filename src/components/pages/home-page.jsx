import React from 'react';

import BookList from '../book-list';

const HomePage = () => (
  <div>
    <BookList books={[      {
        id: 1,
        title: 'Speaking JavaScript: An In-Depth Guide for Programmers',
        author: 'Dr. Axel Rauschmayer',
      },
      {
        id: 2,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
      },]}/>
  </div>
);

export default HomePage;
