import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home"; // Client homepage
import SignUpTabs from "../components/Auth/SignUpTabs"; // Sign-up component
import LoginPage from "../components/Auth/LoginModal"; // Login component
import PrivateRoute from "./PrivateRoute"; // Route protection
import ClientHome from "../components/Client/ClientHome"; // Client home page with records
import TranslatorHome from "../components/Translator/TranslatorHome"; // Translator orders page
import HomeRoute from "./HomeRoute";
import UploadDocument from "../components/Client/UploadDocument";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomeRoute />
          }
        />
        <Route
          path="/client-home"
          element={
            <PrivateRoute>
              <ClientHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <PrivateRoute>
              <UploadDocument />
            </PrivateRoute>
          }
        />
        <Route
          path="/translator-home"
          element={
            <PrivateRoute>
              <TranslatorHome />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpTabs />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
