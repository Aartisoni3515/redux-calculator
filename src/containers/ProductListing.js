import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  console.log("Products :", products);
  return (
    <div className="product-container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
