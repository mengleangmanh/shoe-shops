import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="border p-4 rounded shadow-sm flex flex-col justify-between">
      <Link
        to={`/product/${product.id}`}
        className="mb-2 text-lg font-semibold"
      >
        {product.name}
      </Link>
      <div className="mb-2">${product.price.toFixed(2)}</div>
      <Button onClick={() => onAdd && onAdd(product)}>Add to cart</Button>
    </div>
  );
}
