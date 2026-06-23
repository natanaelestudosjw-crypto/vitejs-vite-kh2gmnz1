import ProductCard from "./ProductCard";

function ProductList({ products, onAddToBag, apagar, iniciarEdicao, }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onAddToBag={onAddToBag}
          apagar={apagar}
          iniciarEdicao={iniciarEdicao}
        />
      ))}
    </div>
  );
}

export default ProductList;