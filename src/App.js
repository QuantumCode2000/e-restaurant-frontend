import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { MainLayout } from "./layouts";
import {
  Home,
  About,
  Register,
  Functionalities,
  Login,
  Prices,
  Dashboard,
  PrivateRoute,
} from "./routes";

function App() {
  return (
    <UserProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element=<Home /> />
            <Route path="/about" element=<About /> />
            <Route path="/register" element=<Register /> />
            <Route path="/functionalities" element=<Functionalities /> />
            <Route path="/login" element=<Login /> />
            <Route path="/prices" element=<Prices /> />
            {/*<PrivateRoute exact path="/dashboard" element=<Dashboard /> />*/}
          </Routes>
        </MainLayout>
      </Router>
    </UserProvider>
  );
}

export default App;
