const Navbar = () => {
  return (
    <nav className="nav nav-fixed">
      <a className="nav-section" href="/">
        <span className="nav-title">Wonder Bakery</span>
      </a>
      <div className="nav-section nav-section-right">
        <a className="btn btn-primary btn-sm btn-icon" href="/">
          <span className="material-icons"> person </span>
          User
        </a>
        <a className="btn btn-primary btn-sm btn-icon" href="/">
          <span className="material-icons"> shopping_cart </span>
          Cart
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
