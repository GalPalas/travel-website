import React from "react";
import "./cart.css";

function Cart() {
  return (
    <div>
      <h1>Are you in shopping cart!</h1>

      <div className="w3-container">
        <table className="w3-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Total Carts</th>
              <th />
              <th />
              <th />
              <th>0$</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
