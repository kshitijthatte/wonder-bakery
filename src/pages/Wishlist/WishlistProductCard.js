import { useAuth } from "../../contexts/authContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { removeFromWishlist } from "../../services/wishlistServices";

const WishlistProductCard = ({
  product: { _id, title, categoryName, imgURL, price },
}) => {
  const {
    auth: { token },
  } = useAuth();
  const { setWishlist } = useWishlist();

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
            <button className="btn btn-sm btn-primary">Add to Cart</button>
            <button
              className="btn card-icon material-icons"
              style={{ color: "red" }}
              onClick={() => setWishlist(removeFromWishlist(token, _id))}
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
