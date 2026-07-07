function Navbar(props) {
  return (
    <>
      <nav className="navbar">
        <span className="navbar-logo"> Lego Cars  </span>
        <input type="text" onChange={(event) => { props.setBusca(event.target.value) }} />

        <span className="navbar-bag" onClick={() => props.openBag(true)}>
          Carrinho ({props.bagItems}) </span>
      </nav>
    </>
  );
}
export default Navbar;
