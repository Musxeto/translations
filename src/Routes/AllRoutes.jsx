import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpTabs from "../components/Auth/SignUpTabs"; // Sign-up component
import LoginPage from "../components/Auth/LoginModal"; // Login component
import PrivateRoute from "./PrivateRoute"; // Route protection
import ClientHome from "../components/Client/ClientHome"; // Client home page with records
import TranslatorHome from "../components/Translator/TranslatorHome"; // Translator orders page
import HomeRoute from "./HomeRoute";
import UploadDocument from "../components/Client/UploadDocument";
import BrowseOrders from "../components/Translator/BrowseOrders";
import TranslatorChat from "../components/Translator/TranslatorChat";
import ClientChat from "../components/Client/ClientChat";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/home" element={<HomeRoute />} />
        <Route
          path="/client-home"
          element={
            <PrivateRoute requiredRole={"client"}>
              <ClientHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <PrivateRoute requiredRole={"client"}>
              <UploadDocument />
            </PrivateRoute>
          }
        />
        <Route
          path="/translator/home"
          element={
            <PrivateRoute requiredRole={"translator"}>
              <TranslatorHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/translator/browse"
          element={
            <PrivateRoute requiredRole={"translator"}>
              <BrowseOrders />
            </PrivateRoute>
          }
        />
        <Route
          path="/client/order/:id/chat"
          element={
            <PrivateRoute requiredRole={"client"}>
              <ClientChat />
            </PrivateRoute>
          }
        />
        <Route
          path="/translator/order/:id/chat"
          element={
            <PrivateRoute requiredRole={"translator"}>
              <TranslatorChat />
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
