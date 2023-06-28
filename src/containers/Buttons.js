import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../redux/actions/productsActions";
import { Link } from "react-router-dom";

const Buttons = ({ id, title, image, price, category }) => {
  const [showButton, setShowButton] = useState(true);
  const dispatch = useDispatch();
  const send = (e) => {
    console.log(e);
    dispatch(addToCart(e));
    setShowButton(false);
  };
  const data = useSelector((state) => state.cartItems);

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };
  const quantity = data.cartItems.map((product) => product.quantity);KW
  // console.log(quantity);
  const product = { id, title, image, price, category };

  return (
    <div>
      <div key={id}>
        <Link to={`/product/${id}`}>
          <div className="cards">
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="content-p">
              <div className="header">{title}</div>
              <div className="price"> Price :{price}</div>
              <div className="meta"> Category: {category}</div>
            </div>
          </div>
        </Link>

        {showButton ? (
          <button
            style={{
              height: "30px",
              width: "100px",
              marginLeft: "60px",
              marginTop: "10px",
            }}
            onClick={() => send(product)}
          >
            Add to cart
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              padding: "0.2rem",
              marginTop: "10px",
            }}
          >
            <button
              onClick={() => handleDecrement(id)}
              style={{ padding: "5px 10px", marginRight: "15px" }}
            >
              -
            </button>
            <p style={{ fontSize: "1rem" }}>{quantity}</p>
            <button
              onClick={() => handleIncrement(id)}
              style={{ padding: "5px 10px", marginLeft: "15px" }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buttons;
