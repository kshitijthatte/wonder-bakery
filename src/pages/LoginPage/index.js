import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import "./styles.css";

const LoginPage = () => {
  const { setAuth } = useAuth();
  const [inputValues, setInputValues] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const signinHandler = async () => {
    try {
      setAuth({
        isAuthenticated: false,
        user: "",
        token: "",
      });
      setError("");

      const response = await axios.post(`/api/auth/login`, {
        email: inputValues.email,
        password: inputValues.password,
      });

      localStorage.setItem("AUTH_TOKEN", response.data.encodedToken);
      localStorage.setItem("WB_USER", JSON.stringify(response.data.foundUser));

      setAuth(a => ({
        ...a,
        isAuthenticated: true,
        user: response.data.foundUser,
        token: response.data.encodedToken,
      }));
      
      navigate(`/`);
    } catch (error) {
      console.log(error);
      setError(error.response.data.errors[0]);
    }
  };
  return (
    <main className="nav-fixed-adjust">
      <div className="authentication-container">
        <div className="card input-group">
          <div className="text-lg text-center">Wonder Bakery - Login</div>
          <p className="text-red">{error}</p>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={inputValues.email}
            onChange={e =>
              setInputValues(v => ({ ...v, email: e.target.value }))
            }
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={inputValues.password}
            onChange={e =>
              setInputValues(v => ({ ...v, password: e.target.value }))
            }
          />
          <button
            className="btn btn-primary text-center"
            onClick={signinHandler}
          >
            Log In
          </button>
          <a className="text-description text-center" href="/">
            Forgot password?
          </a>

          <hr className="divider" />
          <Link className="btn outline-primary text-center" to="/signup">
            Or Sign Up Now!
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
