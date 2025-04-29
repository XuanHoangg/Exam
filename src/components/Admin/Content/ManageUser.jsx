import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ModalCreateUser from "./ModalCreateUser";
import "../../../style/Admin/ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { getAllUsers } from "../../../service/userService";

const ManageUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    let data = await getAllUsers();
    if (data && data.EC === 0) {
      setUsers(data.DT);
    }
  };
  return (
    <div className="manage-continer">
      <div className="title">Quản lý người dùng</div>
      <div className="user-content">
        <div>
          <Button variant="success" onClick={handleShow}>
            <FcPlus /> Thêm người dùng
          </Button>
          <ModalCreateUser
            show={show}
            handleClose={handleClose}
            fetchUsers={fetchUsers}
          />
        </div>
        <div className="table-user-container mt-3">
          <TableUser users={users} />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
