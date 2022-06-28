import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultStateReducer = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log("action.item.amount", action.item.amount);
  console.log("action.item.price", action.item.price);
  console.log("state.totalAmount", state.totalAmount);

  if (action.type === "ADD") {
    const updatedItems = [...state.items, action.item];
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultStateReducer;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultStateReducer
  );

  const addToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
