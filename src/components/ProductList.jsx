import ProductCard from "./ProductCard";

function ProductList({ products, onAddToBag }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onAddToBag={onAddToBag}
        />
      ))}
    </div>
  );
}

export default ProductList;