import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const productContext = createContext();

function ProdcutProvider({ children }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/products");
      setProduct(response);
    };
    fetchData();
  }, []);

  return (
    <div>
      <productContext.Provider value={product}>
        {children}
      </productContext.Provider>
    </div>
  );
}

const useProduct = () => {
  const products = useContext(productContext);
  return products;
};

const useProductDetails = (id) => {
  const products = useContext(productContext);
  const result = products.find((item) => item.id === id);
  return result;
};

export default ProdcutProvider;
export { useProduct, useProductDetails };
