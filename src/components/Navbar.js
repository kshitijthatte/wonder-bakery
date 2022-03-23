import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useWishlist } from "../contexts/wishlistContext";
import signoutHandler from "../services/signoutHandler";

const Navbar = () => {
  const {
    auth: { isAuthenticated, user },
    setAuth,
  } = useAuth();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <nav className="nav nav-fixed">
      <NavLink className="nav-section" to="/">
        <span className="nav-title">Wonder Bakery</span>
      </NavLink>
      <div className="nav-section nav-section-right">
        {!isAuthenticated && (
          <NavLink to="/login" className="btn btn-primary btn-sm btn-icon">
            <span className="material-icons"> person </span>
            Login
          </NavLink>
        )}

        {isAuthenticated && (
          <>
            <NavLink to="/user" className="btn btn-primary btn-sm btn-icon">
              <span className="material-icons"> person </span>
              Hi, {user.firstName}
            </NavLink>
            <NavLink
              to="/wishlist"
              className="btn btn-primary btn-sm btn-icon badge-container"
            >
              <div className=" badge-container">
                <span className="material-icons">favorite</span>
                {wishlist.length > 0 && (
                  <div class="badge bg-red">{wishlist.length}</div>
                )}
              </div>
            </NavLink>
            <NavLink to="/cart" className="btn btn-primary btn-sm btn-icon">
              <span className="material-icons"> shopping_cart </span>
            </NavLink>
            <button
              className="btn btn-primary btn-sm btn-icon"
              onClick={() => signoutHandler(setAuth, navigate)}
            >
              <span className="material-icons"> logout </span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
