function Navbar({bagCount, onBagClick}) {
  return (
    <nav className="navbar">
      <span className="navbar-logo"> Biqueira Express </span>
      <span className="navbar-bag" onClick={onBagClick}>
      Saquinho ({bagCount}) </span>
    </nav>
  );
}
export default Navbar;
