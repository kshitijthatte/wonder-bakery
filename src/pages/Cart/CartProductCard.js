import { useAuth } from "../../contexts/authContext";
import { useCart } from "../../contexts/cartContext";
import { removeFromCart, updateQtyInCart } from "../../services/cartServices";

const CartProductCard = ({ product }) => {
  const { _id, title, categoryName, imgURL, price, qty } = product;
  const { setCart } = useCart();
  const {
    auth: { token },
  } = useAuth();
  return (
    <div className="card">
      <div className="card-horizontal">
        <img className="card-img" src={imgURL} alt={title} />
        <div className="card-content">
          <div className="card-title">{title}</div>
          <p className="card-subtitle">{categoryName.slice(0, -1)}</p>
          <div className="card-subtitle">
            <strong> ₹{price} </strong> x {qty} ={" "}
            <strong>₹{price * qty}</strong>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <div className="qty">
          <button
            className="btn btn-sm btn-primary btn-round material-icons"
            onClick={async () =>
              qty <= 1
                ? setCart(await removeFromCart(token, _id))
                : setCart(await updateQtyInCart(token, "decrement", _id))
            }
          >
            remove
          </button>
          <input type="text" value={product.qty} readOnly />
          <button
            className="btn btn-sm btn-primary btn-round material-icons"
            onClick={async () =>
              setCart(await updateQtyInCart(token, "increment", _id))
            }
          >
            add
          </button>
        </div>
        <button
          className="btn btn-sm btn-transparent"
          onClick={async () => setCart(await removeFromCart(token, _id))}
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
