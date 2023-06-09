import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Buttons from "./Buttons";

const ProductComponent = () => {
  const data = useSelector((state) => state.cartItems);

  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    // const quantity = data.cartItems

    const { id } = product;
    return (
      <div className="display" key={id}>
        <Buttons
          id={id}
          title={product.title}
          image={product.image}
          category={product.category}
          price={product.price}
        />
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
