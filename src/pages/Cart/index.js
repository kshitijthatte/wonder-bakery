import CartProductCard from "./CartProductCard";

const Cart = () => {
  return (
    <main className="nav-fixed-adjust">
      <div className="cart-container">
        <div className="cart-products">
          <CartProductCard />
        </div>

        <div className="price-details">
          <div className="price-details-title">
            Price (2 items) <span>₹2,380</span>
          </div>
          <div className="price-details-title">
            Discount <span className="text-green">− ₹800</span>
          </div>
          <div className="price-details-title">
            Delivery Charges <span className="text-green">FREE</span>
          </div>
          <hr className="divider" />
          <strong className="price-details-title">
            Total Amount <span>₹1,580</span>
          </strong>
          <hr className="divider" />
          <button className="btn btn-primary order-btn">Place Order</button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
