import React from "react";
import SideBar from "./SideBar";
import "../../style/Admin/Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  return (
    <div className="admin-continer">
      <div className="admin-sidebar">
        <SideBar
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={() => setToggled(!toggled)}
        />
        <FaBars
          className="fabars-toggle"
          onClick={() => {
            if (window.innerWidth < 768) {
              setToggled(!toggled);
            } else {
              setCollapsed(!collapsed);
            }
          }}
        />
      </div>
      <div className="admin-content">
        <div className="admin-header"></div>
        <div className="admin-main">
          <Outlet />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          // transition={Bounce}
        />
      </div>
    </div>
  );
};

export default Admin;
