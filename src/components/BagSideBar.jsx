function BagSideBar ({ bagItems, onRemove, onClose }) {
    const total = bagItems.reduce((soma, item) => {
        const preco = parseFloat(item.price.replace("," , ".") || 0)
        return soma + preco
    }, 0)
}

return (
    <div className="bag-overlay">
    <div className="bag-sidebar">
      <div className="bag-header">
        <h2>Seu Saquinho</h2>
        <button className="bag-close" onClick={onClose}>✕</button>
      </div>

      {bagItems.length === 0 ? (
        <p className="bag-empty">Nenhum item no Saquinho.</p>
      ) : (
        <>
          <ul className="bag-list">
            {bagItems.map((item, index) => (
              <li key={index} className="bag-item">
                <span className="bag-item-name">{item.name}</span>
                <span className="bag-item-price">R$ {item.price}</span>
                <button
                  className="bag-item-remove"
                  onClick={() => onRemove(index)}
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>

          <div className="bag-footer">
            <strong>Total: R$ {total.toFixed(2).replace('.', ',')}</strong>
          </div>
        </>
      )}
    </div>
  </div>
)

export default BagSideBar;
