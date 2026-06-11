import {useState} from 'react'
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import BagSideBar from "./components/ProductList";

const products = [
  {
    id: 1,
    name: "",
    price: "",
    image: "",
  },
  {
    id: 2,
    name: "",
    price: "",
    image: "",
  },
  {
    id: 3,
    name: "",
    price: "",
    image: "",
  },
  {
    id: 4,
    name: "",
    price: "",
    image: "",
  },
  {
    id: 5,
    name: "",
    price: "",
    image: "",
  },
  {
    id: 6,
    name: "",
    price: "",
    image: "",
  },
];

function App() {

  const [bagCount, setBagCount] = useState([])
  const [isBagOpen, setIsBagOpen] = useState(false)

  function handleAddToBag(product) {
    setBagCount({...bagItems, product})
  }

  function handleRemoveFromBag(index) {
    setBagItems(bagItems.filter((_, i) => i !== index))
  }

  function handleOpenBag() {
    setIsBagOpen(true)
  }

  function handleCloseBag() {
    setIsbagOpen(false)
  }



  return (
    <div>
      <Navbar bagCount={bagCount.length}
      onBagClick ={handleOpenBag}/>
      <main className="main-content">
        <h2 className="section-title">Nossos Produtos</h2>
        <ProductList products={products} onAddToBag={handleAddToBag} />
      </main>
      {isCartOpen && (
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
