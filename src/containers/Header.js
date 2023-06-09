import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const data = useSelector((state) => state);
  // console.log(data);
  return (
    <div className="contain">
      <div className="content">
        <h2>shop</h2>
        <Link to="/cart">
          <span>
            <AiOutlineShoppingCart />
            <sup>{data.cartItems.cartItems.length}</sup>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
