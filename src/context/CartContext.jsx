// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [items, setItems] = useState([]);

//   function addItem(product) {
//     setItems((prev) => {
//       const existing = prev.find((i) => i.id === product.id);
//       if (existing) {
//         // increase quantity
//         return prev.map((i) =>
//           i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   }

//   function removeItem(id) {
//     setItems((prev) => prev.filter((i) => i.id !== id));
//   }

//   function clearCart() {
//     setItems([]);
//   }

//   const value = {
//     items,
//     addItem,
//     removeItem,
//     clearCart,
//     totalQuantity: items.reduce((sum, i) => sum + i.quantity, 0),
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// }

import React, { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalQuantity = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const value = {
    items,
    addItem,
    removeItem,
    clearCart,
    totalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
