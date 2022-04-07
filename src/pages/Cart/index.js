import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import CartProductCard from "./CartProductCard";

const Cart = () => {
  const { cart, getTotalCartPrice } = useCart();

  return (
    <main className="nav-fixed-adjust">
      {cart.length > 0 ? (
        <div className="cart-container">
          <div className="cart-products">
            {cart.map(product => (
              <CartProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="price-details">
            <div className="price-details-title">
              Price ({cart.length} items) <span>₹{getTotalCartPrice}</span>
            </div>
            <div className="price-details-title">
              Delivery Charges <span className="text-green">FREE</span>
            </div>
            <hr className="divider" />
            <strong className="price-details-title">
              Total Amount <span>₹{getTotalCartPrice}</span>
            </strong>
            <hr className="divider" />
            <Link to="/checkout" className="btn btn-primary order-btn">
              Place Order
            </Link>
          </div>
        </div>
      ) : (
        <h1 class="text-center">Your Cart is Empty</h1>
      )}
    </main>
  );
};

export default Cart;
