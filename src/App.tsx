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
  })

  const [inputName, setInputName] = useState("")
  const [inputPrice, setInputPrice] = useState("")
  const [inputImage, setInputImage] = useState("")
  const [editandoId, setEditandoId] = useState(null)

  function handleAddToBag(product) {
    setBagItems([...bagItems, product]);
    console.log(bagItems)
  }

  function cadastrar() {
    if (!inputName.trim()) return; // 1. valida: nome é obrigatório

    const novoItem = {
      id: Date.now(),                  // 2. id único usando timestamp
      name: inputName.trim(),
      price: Number(inputPrice) || 0,  // converte string para número
      image: inputImage.trim(),
    };

    setProducts([...products, novoItem]); // 3. adiciona sem apagar os anteriores

    setInputName("");    // 4. limpa os campos
    setInputPrice("");
    setInputImage("");
  }

  function apagar(id) {
    const nova = products.filter((item) => item.id !== id)
    setProducts(nova)
  }

  function iniciarEdicao(product) {
    setEditandoId(product.id)   // marca qual item está sendo editado
    setInputName(product.name)  // preenche o formulário com os dados atuais
    setInputPrice(product.price)
    setInputImage(product.image)
  }

  function cancelarEdicao() {
    setEditandoId(null)
    setInputName("")
    setInputPrice("")
    setInputImage("")
  }

  function salvarEdicao() {
    if (!inputName.trim()) return;
  
    const atualizada = products.map((product) =>
      product.id === editandoId
        ? {
            ...product,
            name: inputName.trim(),
            price: Number(inputPrice) || 0,
            image: inputImage.trim(),
          }
        : product
    );
  
    setProducts(atualizada);
    setEditandoId(null); // volta ao modo cadastro
    setInputName("");
    setInputPrice("");
    setInputImage("");
  }

  return (
    <>
      <Navbar
        setBusca={setBusca}
        bagItems={bagItems.length}
        openBag={setIsBagOpen} />
      <main className="main-content">
        <h2 className="section-title">Nossos Produtos</h2>
        <div>
          <input
            type="text"
            placeholder="Nome da tecnologia"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Valor (R$)"
            value={inputPrice}
            onChange={(e) => setInputPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="URL da imagem"
            value={inputImage}
            onChange={(e) => setInputImage(e.target.value)}
          />
          <button onClick={cadastrar}>Cadastrar</button>
          <h2>{editandoId ? "Editar tecnologia" : "Cadastrar tecnologia"}</h2>
          {editandoId ? (
            <div className="form-botoes">
              <button className="btn-salvar" onClick={salvarEdicao}>Salvar</button>
              <button className="btn-cancelar" onClick={cancelarEdicao}>Cancelar</button>
            </div>
          ) : (
            <button onClick={cadastrar}>Cadastrar</button>
          )}
        </div>
        <ProductList onAddToBag={handleAddToBag} products={produtosFiltrados} apagar={apagar}
          iniciarEdicao={iniciarEdicao} />
        {isBagOpen && (
          <BagSideBar closeBag={setIsBagOpen} bagItems={bagItems}
          />
        )}
      </main>
    </>
  );
}

export default App;
