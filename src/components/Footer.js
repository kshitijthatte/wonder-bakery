const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid grid-col-3">
        <div>
          <h3>Wonder Bakery</h3>
          <p>Fresh baked goods made with love ❤️</p>
        </div>
        <div>
          <h3>Site Links</h3>
          <ul>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Cart</a>
            </li>
            <li>
              <a href="/">Wishlist</a>
            </li>
            <li>
              <a href="/">Orders</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Socials</h3>
          <ul>
            <li>
              <a href="https://github.com/kshitijthatte/wonder-bakery">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/KshitijThatte">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kshitijthatte/">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
