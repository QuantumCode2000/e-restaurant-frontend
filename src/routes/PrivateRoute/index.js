import { Route } from "react-router-dom";

import React from "react";

const PrivateRoute = ({ component, ...rest }) => {
  let auth = false;
  return (
    <Route {...rest}>{auth ? <component /> : <Redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;
