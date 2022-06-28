import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const contextData = useContext(CartContext);
  console.log("contextData header", contextData);

  const numberOfCartItems = contextData.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  console.log("numberOfCartItems", numberOfCartItems);
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
