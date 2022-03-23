import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import "../LoginPage/styles.css";
import axios from "axios";

const SignupPage = () => {
  const { setAuth } = useAuth();
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    retypedPassword: "",
  });
  let navigate = useNavigate();
  const [error, setError] = useState("");

  const signupHandler = async () => {
    try {
      setAuth({
        isAuthenticated: false,
        user: "",
        token: "",
      });
      setError("");
      const response = await axios.post(`/api/auth/signup`, {
        firstName: inputValues.firstName,
        lastName: inputValues.lastName,
        email: inputValues.email,
        password: inputValues.password,
        retypedPassword: inputValues.retypedPassword,
      });
      localStorage.setItem("AUTH_TOKEN", response.data.encodedToken);
      localStorage.setItem("WB_USER", JSON.stringify(response.data.createdUser));
      setAuth(a => ({
        ...a,
        isAuthenticated: true,
        user: response.data.createdUser,
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
          <div className="text-lg text-center">Wonder Bakery - Signup</div>
          <p className="text-red">{error}</p>
          <div className="name-input">
            <input
              type="text"
              className="input"
              placeholder="First Name"
              value={inputValues.firstName}
              onChange={e =>
                setInputValues(v => ({ ...v, firstName: e.target.value }))
              }
            />
            <input
              type="text"
              className="input"
              placeholder="Last Name"
              value={inputValues.lastName}
              onChange={e =>
                setInputValues(v => ({ ...v, lastName: e.target.value }))
              }
            />
          </div>
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
            placeholder="New Password"
            value={inputValues.password}
            onChange={e =>
              setInputValues(v => ({ ...v, password: e.target.value }))
            }
          />
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
            value={inputValues.retypedPassword}
            onChange={e =>
              setInputValues(v => ({ ...v, retypedPassword: e.target.value }))
            }
          />
          <button
            className="btn btn-primary text-center"
            onClick={signupHandler}
          >
            Sign Up
          </button>

          <hr className="divider" />
          <Link className="btn outline-primary text-center" to="/login">
            Or Login Now!
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
