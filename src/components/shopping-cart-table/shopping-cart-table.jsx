import React from 'react';
import { connect } from 'react-redux';

import { compose } from '../../utils';

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  console.log(onDecrease);
  const renderRow = ({ id, name, count, price }, index) => (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{count}</td>
      <td>${price}</td>
      <td>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => onIncrease(id)}
        >
          <i className="fa fa-plus"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => onDelete(id)}
        >
          <i className="fa fa-trash"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => onDecrease(id)}
        >
          <i className="fa fa-minus"></i>
        </button>
      </div>
      </td>
    </tr>
  );

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>
      <div className="total">
        Total <span className="price">${total}</span>
      </div>
    </div>
  );
}

const mapStateToProps = ({ cartItems, orderTotal }) => ({
  items: cartItems,
  total: orderTotal,
});

const mapDispatchToProps = () => ({
  onIncrease: (id) => console.log(`inc ${id}`),
  onDecrease: (id) => console.log(`dec ${id}`),
  onDelete: (id) => console.log(`del ${id}`),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ShoppingCartTable);
