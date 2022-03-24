import { useWishlist } from "../../contexts/wishlistContext";
import "../Cart/styles.css";
import WishlistProductCard from "./WishlistProductCard";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  return (
    <main className="nav-fixed-adjust">
      <h1 className="text-center">My Wishlist ({wishlist.length})</h1>
      <div className="cart-container">
        <div className="cart-products">
          {wishlist.map(product => (
            <WishlistProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
