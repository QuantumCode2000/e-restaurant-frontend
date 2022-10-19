import React from "react";
import { SideBar } from "../../components";
import { Outlet } from "react-router-dom";
// import { Footer } from "../container";

const SuperLayout = () => (
  <React.Fragment>
    <menu className="main-container main-container-grid">
      <SideBar />
      <Outlet />
    </menu>
  </React.Fragment>
);

export default SuperLayout;
