import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: localStorage.getItem("AUTH_TOKEN") ? true : false,
    user: JSON.parse(localStorage.getItem("WB_USER")),
    token: localStorage.getItem("AUTH_TOKEN") || "",
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
