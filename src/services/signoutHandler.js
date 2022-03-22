const signoutHandler = (setAuth, navigate) => {
  localStorage.removeItem("WB_USER");
  localStorage.removeItem("AUTH_TOKEN");
  setAuth({
    isAuthenticated: false,
    user: "",
    token: "",
  });
  navigate("/");
};

export default signoutHandler;
