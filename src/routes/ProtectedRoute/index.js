import { Navigate } from "react-router-dom";

import React from "react";

const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
