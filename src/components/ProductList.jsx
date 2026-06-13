import ProductCard from "./ProductCard";

function ProductList(props) {
  return (
    <div className="product-grid">
      {props.products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onAddToBag={props.onAddToBag}
        />
      ))}
    </div>
  );
}

export default ProductList;