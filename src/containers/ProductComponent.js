import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/productsActions";

const ProductComponent = () => {
  const [data, setData] = useState("");

  const dispatch = useDispatch();

  const send = (e) => {
    console.log(e);
    dispatch(addToCart(e));
  };
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="display" key={id}>
        <Link to={`/product/${id}`}>
          <div className=" cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content-p">
                <div className="header">{title}</div>
                <div className=" price"> Price: ${price}</div>
                <div className="meta"> Category: {category}</div>
              </div>
            </div>
          </div>
        </Link>

        <button onClick={() => send(product)}>Add to cart</button>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
