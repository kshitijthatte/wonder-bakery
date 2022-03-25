import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useCart } from "../../contexts/cartContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { addToCart } from "../../services/cartServices";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../services/wishlistServices";

const ProductCard = ({ product }) => {
  const { _id, title, categoryName, imgURL, price, rating } = product;
  const {
    auth: { isAuthenticated, token },
  } = useAuth();
  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const isInWishlist = productID =>
    wishlist.find(wishlistProduct => wishlistProduct._id === productID);

  const isInCart = productID =>
    cart.find(cartProduct => cartProduct._id === productID);

  return (
    <div className="card card-badge product-card">
      <img className="card-img" src={imgURL} alt={title} />
      <a href="/" className="card-title">
        {title.length <= 18 ? title : title.slice(0, 16) + "..."}
      </a>
      <div
        className="c-badge-right rating-badge"
        style={{ background: rating < 3.8 && "var(--yellow)" }}
      >
        {rating} <span className="material-icons">star</span>
      </div>
      <p className="card-subtitle">{categoryName.slice(0, -1)}</p>
      <a href="/" className="card-description product-price text-md">
        <strong> ₹{price} </strong>
      </a>

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
             onClick={async () => {
                if (isAuthenticated) {
                  setCart(await addToCart(token, product))
                } else {
                  navigate("/login");
                }
              }}
          >
            Add to Cart
          </button>
        )}
        <div className="card-actions-right">
          {isInWishlist(_id) ? (
            <button
              className="btn card-icon material-icons"
              style={{ color: "red" }}
              onClick={async () =>
                setWishlist(await removeFromWishlist(token, _id))
              }
            >
              favorite
            </button>
          ) : (
            <button
              className="btn card-icon material-icons "
              onClick={async () => {
                if (isAuthenticated) {
                  setWishlist(await addToWishlist(token, product));
                } else {
                  navigate("/login");
                }
              }}
            >
              favorite_border
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
