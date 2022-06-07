import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const { price, description, name } = props.meal;

  const priceFormat = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceFormat}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
