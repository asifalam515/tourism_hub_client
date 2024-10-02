import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  if (loading) {
    return <span className="loading loading-spinner text-error"></span>;
  }
  if (user) {
    return children;
  }
};

export default PrivateRoutes;
