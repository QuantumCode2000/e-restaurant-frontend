import React from "react";
import { NavBarP } from "../../components";
// import { Footer } from "../container";

const MainLayout = ({ children }) => (
  <React.Fragment>
    <NavBarP />
    {children}
  </React.Fragment>
);

export default MainLayout;
