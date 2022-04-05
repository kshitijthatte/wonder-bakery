import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useCart } from "../../contexts/cartContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { addToCart } from "../../services/cartServices";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../services/wishlistServices";

const BestSelling = ({ product }) => {
  const { _id, title, imgURL } = product;
  const {
    auth: { isAuthenticated, token },
  } = useAuth();
  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const isInCart = productID =>
    cart.find(cartProduct => cartProduct._id === productID);
  const isInWishlist = productID =>
    wishlist.find(wishlistProduct => wishlistProduct._id === productID);

  return (
    <div className="card">
      <div className="card-horizontal">
        <img className="card-img" src={imgURL} alt={title} />
        <div className="card-content">
          <div className="card-title">{title}</div>
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
                    setCart(await addToCart(token, product));
                  } else {
                    navigate("/login");
                  }
                }}
              >
                Add to Cart
              </button>
            )}
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
    </div>
  );
};

export default BestSelling;
