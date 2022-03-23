import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeServer } from "./server";
import Mockman from "mockman-js";
import { AuthProvider } from "./contexts/authContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <AuthProvider>
              <App />
            </AuthProvider>
          }
        />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
