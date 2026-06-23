import { useState } from 'react'
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";
import BagSideBar from "./components/BagSideBar";

const productsIniciais = [
  {
    id: 1,
    name: "Bugatti Chiron Pur Sport - LEGO TECHNIC",
    price: 441.98,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQAC-4ihlZtW-L1dVmuDA8me42M9mjGL7yo2JSPeDtx-sLtkHuDu4PwIu0oBruv5cmNfg9mBJev59RpCXK0KBGwmWlFHzu_mv3CGc9lx6B5tm6-15VFIB1whg",
  },
  {
    id: 2,
    name: "Koenigsegg Jesko LEGO - Speed Champions",
    price: 369.96,
    image: "https://m.media-amazon.com/images/I/81aOihnR0qL._AC_SX679_.jpg",
  },
  {
    id: 3,
    name: "MC Laren W1 LEGO - Speed Champions",
    price: 208.54,
    image: "https://lego.brickinstructions.com/instructions/77000/77257/001.jpg",
  },
];


function App() {
  const [bagItems, setBagItems] = useState([])
  const [isBagOpen, setIsBagOpen] = useState(false)
  const [busca, setBusca] = useState('')
  const [products, setProducts] = useState(productsIniciais)

  const produtosFiltrados = products.filter((product) => {
    return product.name.toLowerCase().includes(busca.toLowerCase());
  });

  function handleAddToBag(product) {
    setBagItems([...bagItems, product]);
    console.log(bagItems)
  }

  return (
    <>
      <Navbar
        setBusca={setBusca}
        bagItems={bagItems.length}
        openBag={setIsBagOpen} />
      <main className="main-content">
        <h2 className="section-title">Nossos Produtos</h2>
        <ProductList onAddToBag={handleAddToBag} products={produtosFiltrados} />

        {isBagOpen && (
          <BagSideBar closeBag={setIsBagOpen} bagItems={bagItems}
          />
        )}
      </main>
    </>
  );
}

export default App;
