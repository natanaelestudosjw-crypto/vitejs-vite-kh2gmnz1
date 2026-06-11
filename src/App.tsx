import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";

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
  return (
    <div>
      <Navbar/>
      <main className="main-content">
        <h2 className="section-title">Nossos Produtos</h2>
        <div className="product-grid">
        <ProductList products={products}/>
        </div>
      </main>
    </div>
  );
}

export default App;
