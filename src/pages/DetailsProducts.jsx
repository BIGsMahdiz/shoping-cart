import { Link, useParams } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import { useProductDetails } from "../context/ProdcutProvider";
import Loader from "../components/Loader";

import styles from "../styles/DetailsProducts.module.css";

function DetailsProducts() {
  const { id } = useParams();

  const products = useProductDetails(+id);

  if (!products) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={products.image} alt={products.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{products.title}</h3>
        <p className={styles.description}>{products.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {products.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {products.price}
          </span>
          <Link to="/">
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsProducts;
