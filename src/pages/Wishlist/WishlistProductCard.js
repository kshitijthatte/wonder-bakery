import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useCart } from "../../contexts/cartContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { addToCart } from "../../services/cartServices";
import { removeFromWishlist } from "../../services/wishlistServices";

const WishlistProductCard = ({ product }) => {
  const { _id, title, imgURL, price } = product;
  const {
    auth: { token },
  } = useAuth();
  const { setWishlist } = useWishlist();
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const isInCart = productID =>
    cart.find(cartProduct => cartProduct._id === productID);

  return (
    <div className="card">
      <div className="card-horizontal">
        <img className="card-img" src={imgURL} alt={title} />
        <div className="card-content">
          <div className="card-title">{title}</div>
          <div className="card-subtitle">
            <strong> ₹{price} </strong>
          </div>
          <div className="card-actions">
            {isInCart(_id) ? (
              <button
                className="btn btn-sm btn-primary"
                onClick={() => navigate("/cart")}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className="btn btn-sm btn-transparent"
                onClick={async () => setCart(await addToCart(token, product))}
              >
                Add to Cart
              </button>
            )}
            <button
              className="btn card-icon material-icons"
              style={{ color: "red" }}
              onClick={async () =>
                setWishlist(await removeFromWishlist(token, _id))
              }
            >
              favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductCard;
