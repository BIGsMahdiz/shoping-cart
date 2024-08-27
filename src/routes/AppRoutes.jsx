import { Navigate, Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import DetailsProducts from "../pages/DetailsProducts";
import Checkout from "../pages/Checkout";
import PageNotFound from "../pages/404";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<DetailsProducts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/*" element={<PageNotFound />} replace />
      </Routes>
    </div>
  );
}

export default AppRoutes;
