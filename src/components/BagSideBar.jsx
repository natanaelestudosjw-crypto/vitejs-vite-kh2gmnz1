function BagSideBar({ bagItems, closeBag }) {
  const total = bagItems.reduce((soma, item) => {
    const preco = parseFloat(item.price)
    return soma + preco
  }, 0);

  return (
    <div className="bag-overlay">
      <div className="bag-sidebar">
        <div className="bag-header">

          <h2>Seu Saquinho</h2>
          <button className="bag-close" onClick={() => {
            closeBag(false);
          }}>✕</button>
        </div>
        <p className="bag-message">
          Seus Brinquedos.
        </p>
        {bagItems.length == 0 ? (
          <p className="bag-empty">Nenhum item no Saquinho.</p>
        ) : (
          bagItems.map((item, index) => (
            <p key={index}>
              {item.name} - {item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </p>
          ))
        )}
        <div>
          <strong> Total: {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })} </strong>
        </div>
      </div>
    </div>
  )
}
export default BagSideBar;
