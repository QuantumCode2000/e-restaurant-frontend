import { Route, redirect } from "react-router-dom";

import React from "react";

const PrivateRoute = ({ component, ...rest }) => {
  let auth = false;
  return (
    <Route {...rest}>{auth ? <component /> : <redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;
