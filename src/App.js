import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./contexts/authContext";
import SignupPage from "./pages/SignupPage";
import Wishlist from "./pages/Wishlist";
import PrivateRoute from "./components/PrivateRoute";
import Cart from "./pages/Cart";
import UserProfilePage from "./pages/UserProfilePage";
import SingleProductPage from "./pages/SingleProductPage";

export default function App() {
  const {
    auth: { isAuthenticated },
  } = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productID" element={<SingleProductPage />} />
        {!isAuthenticated && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </>
        )}
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <main className="nav-fixed-adjust" style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}
