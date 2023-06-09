import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
// import Category from "./containers/Category";
import Cart from "./containers/Cart/Cart";
import CheckOut from "./containers/CheckOut/CheckOut";
import CartCheck from "./containers/CheckOut/CartCheck";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          {/* <Route path="/category" element={<Category />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/cart/checkout/:itemId" element={<CartCheck/>} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/product/checkout/:productId/" element={<CheckOut />} />


          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
