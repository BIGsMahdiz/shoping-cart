import Card from "../components/Card";
import { useProduct } from "../context/ProdcutProvider";
import Loader from "../components/Loader";

import styles from "../styles/Product.module.css";
import { useEffect, useState } from "react";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

function Products() {
  const context = useProduct();

  const [search, setSearch] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(context);
    setQuery(getInitialQuery(searchParams));
    setSearch(query.search || "");
  }, [context]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(context, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
      {/* <SearchWithCategory /> */}
    </>
  );
}

export default Products;
