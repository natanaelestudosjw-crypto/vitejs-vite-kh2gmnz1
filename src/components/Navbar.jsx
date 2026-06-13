function Navbar(props) {
  return (
    <>
    <nav className="navbar">
      <span className="navbar-logo"> Biqueira Express </span>
      <span className="navbar-bag" onClick={() => props.openBag(true)}>
      Saquinho ({props.bagItems}) </span>
    </nav>
    </>
  );
}
export default Navbar;
