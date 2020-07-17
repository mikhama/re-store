const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1),
    ]
  }

  if (index === -1) {
    return [
      ...cartItems,
      item,
    ];
  }

  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1),
  ]
}

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    price = 0,
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    price: price + book.price * quantity,
  };
}

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems }
  } = state;

  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);

  return {
    orterTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
}

const updateShoppingCart = (state = {
  shoppingCart: {
    cartItems: [],
    orderTotal: 0,
  }
}, action) => {
  switch (action.type) {
    case 'BOOK_ADDED_TO_CART': {
      return updateOrder(state, action.payload, 1);
    }

    case 'BOOK_DELETED_FROM_CART': {
      const item = state.shoppingCart.cartItems
        .find(({ id }) => id === action.payload);

      return updateOrder(state, action.payload, -item.count);
    }

    case 'BOOK_DECREASED_IN_CART': {
      return updateOrder(state, action.payload, -1);
    }

    default: {
      return state.shoppingCart;
    }
  }
}

export default updateShoppingCart;
