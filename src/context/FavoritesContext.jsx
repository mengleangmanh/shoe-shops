import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((item) => item.id === product.id)) {
        return prevFavorites; // Already in favorites
      }
      return [...prevFavorites, product];
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== id),
    );
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
}
