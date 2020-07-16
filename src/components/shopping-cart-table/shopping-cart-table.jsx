import React from 'react';

const ShoppingCartTable = () => (
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
        <tr>
          <td>1</td>
          <td>The Hobbit, or There and Back Again</td>
          <td>2</td>
          <td>$20</td>
          <td>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-outline-success">
              <i className="fa fa-plus"></i>
            </button>
            <button type="button" className="btn btn-outline-danger">
              <i className="fa fa-trash"></i>
            </button>
            <button type="button" className="btn btn-outline-warning">
              <i className="fa fa-minus"></i>
            </button>
          </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="total">Total <span className="price">$201</span></div>
  </div>
);

export default ShoppingCartTable;
