import { useState } from 'react'
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import BagSideBar from "./components/BagSideBar";


function App() {
  const [bagItems, setBagItems] = useState([])
  const [isBagOpen, setIsBagOpen] = useState(false)

  function handleAddToBag(product) {
    setBagItems([...bagItems, product]);
    console.log(bagItems)
  }

  const products = [
    {
      id: 1,
      name: "Canabris Prensada - 1KG",
      price: 2000.01,
      image: "https://images.tcdn.com.br/img/img_prod/918854/noticia_1744174271675a2151970fd.jpg",
    },
    {
      id: 2,
      name: "Pedra Graúda - 1/UN",
      price: 5.19,
      image: "https://www.mprs.mp.br/media/areas/imprensa/midias_noticias/crack.jpg",
    },
    {
      id: 3,
      name: "Coca Rosa - Edição Premium /1GR",
      price: 600.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0k1ClqDq4D8cxsn4aix_jN3xFMVAMCaYJHg&s",
    },
  ];

  return (
    <>
      <Navbar
        bagItems={bagItems.length}
        openBag={setIsBagOpen} />
      <main className="main-content">
        <h2 className="section-title">Nossos Produtos</h2>
        <ProductList onAddToBag={handleAddToBag} products={products} />

        {isBagOpen && (
          <BagSideBar closeBag={setIsBagOpen} bagItems={bagItems}
          />
        )}
      </main>
    </>
  );
}

export default App;
