import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/actions/productsActions";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
function CartPage(props) {
  const data = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const { productId } = useParams();

  // useEffect(() => {
  //   if (productId && productId !== "") dispatch(fetchProduct(productId));
  //   return () => {
  //     dispatch((fetchProduct));
  //   };
  // }, [productId]);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const totalPrice = data.cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  

  return (
    <div>
      <h1>Cart</h1>

      {data.cartItems.length > 0 ? (
        <ul>
          {data.cartItems.map((item, id) => (
            <li key={item.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "90%",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{ height: "100px", width: "100px" }}
                  src={item.image}
                  alt=""
                />
                <p style={{ textAlign: "center", width: "200px" }}>
                  {item.title}
                  {item.category}
                </p>
                <span>
                  ${item.price} <br />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      width: "100px",
                      marginTop: "20px",
                    }}
                  >
                    <button
                      onClick={() => handleDecrement(item.id)}
                      style={{ padding: "5px 10px" }}
                    >
                      -
                    </button>
                    <p style={{ fontSize: "1rem" }}>{item.quantity}</p>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      style={{ padding: "5px 10px" }}
                    >
                      +
                    </button>
                  </span>
                </span>
                <span style={{ display: "grid" }}>
                  <button
                    style={{
                      height: "50px",
                      width: "100px",
                      background: "grey",
                    }}
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                  <Link
                    key={id}
                    to={`/product/cart/checkout/${item.id}`}
                    quantity={item.quantity}
                  >
                    <button
                      style={{
                        height: "50px",
                        width: "100px",
                        background: "grey",
                        marginTop: "10px",
                      }}
                    >
                      Buy now
                    </button>
                  </Link>
                </span>
              </div>
            </li>
          ))}
          <div style={{ marginTop: "8%" }}>
            <Link style={{ paddingLeft: "10%" }} to="/">
              {" "}
              ← Back to shop{" "}
            </Link>
            <h3
              style={{
                textAlign: "right",
                paddingRight: "20%",
                marginBottom: "200px",
              }}
            >
              Total: ${totalPrice}
            </h3>
          </div>
        </ul>
      ) : (
        <h3 style={{ textAlign: "center" }}>Nothing to show</h3>
      )}
    </div>
  );
}

export default CartPage;
