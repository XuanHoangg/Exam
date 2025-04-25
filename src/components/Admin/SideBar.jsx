import React from "react";
import { Menu, MenuItem, SubMenu, Sidebar } from "react-pro-sidebar";
import { FaTachometerAlt, FaUserCog, FaRegLaughWink } from "react-icons/fa";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { PiExamFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import sidebarBg from "../../assets/bg2.jpg";
import { Link } from "react-router-dom";
import Dashboard from "./Content/Dashboard";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  return (
    <>
      <Sidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <div
          className={`sidebar-header ${
            collapsed ? "collapsed" : "not-collapsed"
          }`}
        >
          <IoSettings /> {"\u00A0"}Setting
        </div>
        <hr style={{ border: "1px solid #ccc", margin: "10px 0" }} />
        <Menu>
          <MenuItem icon={<FaTachometerAlt />} component={<Link to="/admin" />}>
            {" "}
            Dashboard
          </MenuItem>
          <SubMenu
            className="sidebar-submenu-manager"
            label="Quản lý"
            icon={<TbLayoutDashboardFilled />}
            suffix={
              <span className="badge yellow" style={{ color: "pink" }}>
                3
              </span>
            }
          >
            <MenuItem
              icon={<FaUserCog />}
              component={<Link to="/admin/manage-users" />}
            >
              Quản lý User
            </MenuItem>
            <MenuItem
              icon={<PiExamFill />}
              component={<Link to="/admin/manage-users" />}
            >
              Quản lý bài Quiz
            </MenuItem>
            <MenuItem
              icon={<FaFileCircleQuestion />}
              component={<Link to="/admin/manage-users" />}
            >
              Quản lý câu hỏi
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideBar;
