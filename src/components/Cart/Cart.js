import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctxData = useContext(cartContext);

  const cartItemRemoveHandler = (id) => {
    ctxData.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctxData.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctxData.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}{" "}
    </ul>
  );

  const totalAmount = `$${ctxData.totalAmount.toFixed(2)}`;
  const hasItems = ctxData.items.length > 0;

  return (
    <Modal onBackgroundClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
