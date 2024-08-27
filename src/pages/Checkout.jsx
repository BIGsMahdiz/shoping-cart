import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCart } from "../context/CartProvider";

import styles from "../styles/Checkout.module.css";

function Checkout() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, data) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className={styles.container}>
      <div>
        <BasketSidebar state={state} clickHandler={clickHandler} />
      </div>
      <div className={styles.products}>
        {state.selectedItems.map((item) => (
          <BasketCard
            key={item.id}
            data={item}
            dispatch={dispatch}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
