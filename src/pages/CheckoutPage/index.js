import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useCart } from "../../contexts/cartContext";
import CheckoutProduct from "./CheckoutProduct";

const CheckoutPage = () => {
  const { cart, getTotalCartPrice } = useCart();
  const [discount, setDiscount] = useState(0);
  const [couponInput, setCouponInput] = useState("");
  const {
    auth: { user },
  } = useAuth();

  const handleCoupons = () => {
    if (couponInput === "WB10") setDiscount(Math.round(getTotalCartPrice * 0.1));
    setCouponInput("");
  };

  return (
    <main className="nav-fixed-adjust">
      {cart.length > 0 ? (
        <div className="cart-container">
          <div className="cart-products">
            <div className="card checkout-user-details">
              <div className="card-horizontal">
                <div className="card-content">
                  <div className="card-title">Deliver to</div>
                  <div className="card-title">
                    {user.firstName} {user.lastName}
                  </div>
                  <div className="card-subtitle">{user.email}</div>

                  <div class="card-actions">
                    <div>
                      <div className="text-md">Address</div>
                      <div>{user.address || "21 Ranch Road, Mumbai, MH"}</div>
                    </div>
                    <div class="card-actions-right">
                      <button class="btn card-icon material-icons">edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {cart.map(product => (
              <CheckoutProduct key={product.id} product={product} />
            ))}
          </div>

          <div className="price-details">
            <div className="price-details-title">
              Price ({cart.length} items) <span>₹{getTotalCartPrice}</span>
            </div>
            {discount > 0 && (
              <div className="price-details-title">
                Coupon Discount
                <span className="text-green">- ₹{discount}</span>
              </div>
            )}
            <div className="price-details-title">
              Delivery Charges <span className="text-green">FREE</span>
            </div>
            {discount === 0 && (
              <div class="input-group price-details-title">
                <label for="coupon">Apply Coupon</label>
                <input
                  type="text"
                  class="input"
                  id="coupon"
                  placeholder="Try 'WB10'"
                  value={couponInput}
                  onChange={e => setCouponInput(e.target.value)}
                  onSubmit={handleCoupons}
                />
                <button
                  className="btn btn-primary btn-sm material-icons"
                  onClick={handleCoupons}
                >
                  arrow_forward
                </button>
              </div>
            )}
            <hr className="divider" />
            <strong className="price-details-title">
              Total Amount <span>₹{getTotalCartPrice - discount}</span>
            </strong>
            <hr className="divider" />
            <button className="btn btn-primary order-btn">Confirm Order</button>
          </div>
        </div>
      ) : (
        <Navigate to="/products" />
      )}
    </main>
  );
};

export default CheckoutPage;
