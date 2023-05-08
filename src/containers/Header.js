import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="container">
      <div className="content">
        <h2>shop</h2>
        <span>
          <AiOutlineShoppingCart /> <sup>0</sup>
        </span>
      </div>
    </div>
  );
};

export default Header;
