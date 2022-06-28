import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import cartContext from "../../store/cart-context";

const Cart = (props) => {
  console.log("contextData", contextData);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}{" "}
    </ul>
  );

  return (
    <Modal onBackgroundClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{contextData.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
