import "./styles.css";

const Wishlist = () => {
  return (
    <main class="nav-fixed-adjust">
      <h1 class="text-center">My Wishlist (2)</h1>
      <div class="cart-container">
        <div class="cart-products">
          <div class="card">
            <div class="card-horizontal">
              <img
                className="card-img"
                src={"https://source.unsplash.com/LDnmyOaA-ew"}
                alt={""}
              />
              <div class="card-content">
                <div class="card-title">Chocolate Cake</div>
                <div class="card-subtitle">
                  <strong> ₹890 </strong>
                </div>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">
                    Add to Cart
                  </button>
                  <button className="btn card-icon material-icons">
                    favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
