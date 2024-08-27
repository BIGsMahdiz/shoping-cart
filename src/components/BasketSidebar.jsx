import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";

import styles from "../styles/BasketSidebar.module.css";

function BasketSidebar({ state, clickHandler }) {
  const { total, itemsCounter, checkout } = state;

  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!checkout ? "Pending" : "Empty"}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>Check out</button>
    </div>
  );
}

export default BasketSidebar;
