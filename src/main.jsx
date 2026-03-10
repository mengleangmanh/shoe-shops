import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </FavoritesProvider>,
);
