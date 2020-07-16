export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Speaking JavaScript: An In-Depth Guide for Programmers',
        author: 'Dr. Axel Rauschmayer',
        price: 30,
        img: 'http://speakingjs.com/es5/orm_front_cover.jpg',
      },
      {
        id: 2,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        price: 11,
        img: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg',
      },
    ];
  };
};
