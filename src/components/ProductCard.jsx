function ProductCard ({name, price, image, onAddToBag}) {
  return (
    <div className="product-card">
      <img src={image} alt={name}/>
      <div className="product-info">
        <h2>{name}</h2>
       <p className="product-price">{price}</p>
       <button className="btn-add" onClick={() => onAddToBag({name, price, image})}>
        Adicionar ao Saquinho</button>
      </div>
    </div>
  );
}
export default ProductCard;