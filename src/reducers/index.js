const initialState = {
  books: [
    {
      id: 1,
      title: 'Speaking JavaScript: An In-Depth Guide for Programmers',
      author: 'Dr. Axel Rauschmayer',
    },
    {
      id: 2,
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED': {
      return {
        books: action.payload,
      };
    }

    default:
      return state;
  }
}

export default reducer;
