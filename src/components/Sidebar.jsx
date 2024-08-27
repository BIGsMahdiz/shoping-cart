import { FaListUl } from "react-icons/fa";

import { creatQueryObject } from "../helpers/helper";
import categorise from "../constants/filter";

import styles from "../styles/Sidebar.module.css";

function Sidebar({ query, setQuery }) {
  const categoryHandler = (event) => {
    const tagName = event.target.tagName;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;

    setQuery((prevQuery) => creatQueryObject(prevQuery, { category }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categorise.map((item) => (
          <li
            key={item.id}
            className={
              query.category === item.type.toLowerCase() ? styles.active : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
