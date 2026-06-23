function ProductCard({ name, price, image, id, onAddToBag, apagar, iniciarEdicao, }) {
  return (
    <>
      <div className="product-card">
        <img src={image} alt={name} />
        <div className="product-info">
          <h2>{name}</h2>
          <p className="product-price"> {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}</p>
          <button className="btn-add" onClick={() => { onAddToBag({ id, name, price, image }); }}>
            Adicionar ao Saquinho</button>

          <div className="acoes">
            <button className="btn-apagar" onClick={() => apagar(id)}>
              Apagar
            </button>
            <button
              className="btn-editar"
              onClick={() => {
                iniciarEdicao({ id, name, price, image });
              }}
            >
              Editar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCard;