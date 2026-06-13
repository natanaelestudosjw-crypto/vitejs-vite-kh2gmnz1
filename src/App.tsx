import {useState} from 'react'
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import BagSideBar from "./components/BagSideBar";

const products = [
  {
    id: 1,
    name: "Canabris Prensada - 1KG",
    price: "R$ 2.000,00",
    image: "https://images.tcdn.com.br/img/img_prod/918854/noticia_1744174271675a2151970fd.jpg",
  },
  {
    id: 2,
    name: "Pedra Graúda - 1/UN",
    price: "R$ 5,00",
    image: "https://www.mprs.mp.br/media/areas/imprensa/midias_noticias/crack.jpg",
  },
  {
    id: 3,
    name: "Coca Rosa - Edição Premium /1GR",
    price: "R$ 600,00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0k1ClqDq4D8cxsn4aix_jN3xFMVAMCaYJHg&s",
  },
];

function App() {

  const [bagItems, setBagItems] = useState([])
  const [isBagOpen, setIsBagOpen] = useState(false)

  function handleAddToBag(product) {
    setBagItems([...bagItems, product])
  }

  function handleRemoveFromBag(index) {
    setBagItems(bagItems.filter((_, i) => i !== index))
  }

  function handleOpenBag() {
    setIsBagOpen(true)
  }

  function handleCloseBag() {
    setIsBagOpen(false)
  }



  return (
    <div>
      <Navbar
       bagItems={bagItems.length} 
       openBag ={setIsBagOpen}/>
      <main className="main-content">
        <h2 className="section-title">Nossos Produtos</h2>
        <ProductList products={products} onAddToBag={handleAddToBag} />
      </main>
      {isBagOpen && (
        <BagSideBar
          bagItems={bagItems}
          onRemove={handleRemoveFromBag}
          onClose={handleCloseBag}
        />
      )}

    </div>
  );
}

export default App;
