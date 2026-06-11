function Navbar({bagCount}) {
  return (
    <nav className="navbar">
      <span className="navbar-logo"> Biqueira Express </span>
      <span className="navbar-bag"> Saquinho ({bagCount}) </span>
    </nav>
  );
}
export default Navbar;
