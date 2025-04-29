import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import Mycomponent from "./components/Mycomponent";
import Header from "./components/Header/Header";
import { Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="app-container">
      <div className="header-continer">
        <Header></Header>
      </div>
      <div className="main-continer">
        <div className="sidenav-continer"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
