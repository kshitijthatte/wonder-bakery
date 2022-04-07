import "./styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useCart } from "../../contexts/cartContext";
import { useProducts } from "../../contexts/productsContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { addToCart } from "../../services/cartServices";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../services/wishlistServices";

const SingleProductPage = () => {
  const { productID } = useParams();
  const { products } = useProducts();
  const { wishlist } = useWishlist();

  const getProductDetails = (products, productID) =>
    products.find(product => product._id === productID);
  const isInWishlist = productID =>
    wishlist.find(wishlistProduct => wishlistProduct._id === productID);

  const product = getProductDetails(products, productID);

  const { _id, title, imgURL, price, description } = product;
  console.log(product);
  const {
    auth: { token },
  } = useAuth();
  const { setWishlist } = useWishlist();
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const isInCart = productID =>
    cart.find(cartProduct => cartProduct._id === productID);
  return (
    <main className="nav-fixed-adjust">
      <div className="single-product-page">
        <div className="card">
          <div className="card-horizontal">
            <img className="card-img" src={imgURL} alt={title} />
            <div className="card-content">
              <div className="card-title">{title}</div>
              <div className="card-subtitle">
                <strong> ₹{price} </strong>
              </div>
              <div className="card-subtitle">{description || 'Description Unavailable'}</div>
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
                    className="btn btn-sm btn-primary"
                    onClick={async () =>
                      setCart(await addToCart(token, product))
                    }
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
                    onClick={async () =>
                      setWishlist(await addToWishlist(token, product))
                    }
                  >
                    favorite_border
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <Link to="/products" className="btn btn-primary btn-icon">
          <span className="material-icons">arrow_back</span>
          All Products
        </Link>
      </div>
    </main>
  );
};

export default SingleProductPage;
