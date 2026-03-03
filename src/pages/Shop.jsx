import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  return (
    <div>
      <h1>Shop</h1>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Shop;
