import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
  addToCart
} from "../redux/actions/productsActions";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  // const fetchProductDetail = async (id) => {
  //   const response = await axios
  //     .get(`'https://fakestoreapi.com/products/${id}`)
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(selectedProduct(response.data));
  // };

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
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
                <p>{description}</p>
                <div className=" " tabIndex="0">
                
                  <div className="visible content">Add to Cart</div>
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
