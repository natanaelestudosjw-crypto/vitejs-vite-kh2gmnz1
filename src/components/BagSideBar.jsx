function BagSideBar (props) {
  const total = props.bagItems.reduce((soma, item) => {
      const preco = parseFloat(item.price.replace("," , "."))
        return soma + preco
    }, 0);

return (
    <div className="bag-overlay">
    <div className="bag-sidebar">
      <div className="bag-header">
      
        <h2>Seu Saquinho</h2>
        <button className="bag-close" onClick={() => {props.closeBag(false);
          }}>✕</button>
      </div>
      <p className="bag-message">
      Estoque fiscalmente invisível.
      </p>
      {props.bagItems.length == 0 ? (
        <p className="bag-empty">Nenhum item no Saquinho.</p>
      ) : (
       
          props.bagItems.map((item, index) => (
            <p key={index}>
              {item.name} - R$ {item.price}
            </p>
          ))
        )}
        <div>
        <strong> Total: R$ {total} </strong>
        </div>
    </div>
  </div>
)
}
export default BagSideBar;
