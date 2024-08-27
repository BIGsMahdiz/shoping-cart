import React from "react";
import AppRoutes from "./routes/AppRoutes";
import ProdcutProvider from "./context/ProdcutProvider";
import CartProvider from "./context/CartProvider";
import Layout from "./layouts/Layout";

function App() {
  return (
    <div>
      <CartProvider>
        <ProdcutProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </ProdcutProvider>
      </CartProvider>
    </div>
  );
}

export default App;
