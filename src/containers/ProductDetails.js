import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description, rating , id } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  const data = useSelector((state) => state.cartItems);
  const quantity = data.cartItems.map((product) => product.quantity);


  return (
    <div className=" grid-container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="main">
          <div className=" ">
            <div className="set-p">
              <div className="">
                <img className="image" src={image} />
              </div>
              <div className="content-pr">
                <h1>{title}</h1>
                <h2>
                  <a className=" ">${price}</a>
                </h2>
                <h3 className=" ">{category}</h3>
                <p>ratings: ⭐⭐⭐⭐{rating["rate"]}</p>
                <p>{description}</p>
                <p>{quantity}jfkml</p>
                <div key={id}>
                  <Link to={`/product/checkout/${id}`}>
                    <button
                      style={{
                        height: "50px",
                        width: "100px",
                        background: "grey",
                        marginTop: "40px",
                      }}
                    >
                      Buy now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
