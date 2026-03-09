// import React from "react";
// import { Link } from "react-router-dom";
// import Button from "./Button";

// export default function ProductCard({ product, onAdd }) {
//   return (
//     <div className="border p-4 rounded shadow-sm flex flex-col justify-between">
//       <Link
//         to={`/product/${product.id}`}
//         className="mb-2 text-lg font-semibold"
//       >
//         {product.name}
//       </Link>
//       <div className="mb-2">${product.price.toFixed(2)}</div>
//       <Button onClick={() => onAdd && onAdd(product)}>Add to cart</Button>
//     </div>
//   );
// }

import React from "react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-square object-cover rounded-lg mb-3"
      />

      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>

      <button
        onClick={() => onAdd(product)}
        className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}
