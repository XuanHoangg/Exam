import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalCreateUser from "./ModalCreateUser";
import "../../../style/Admin/ManageUser.scss";
import { FcPlus } from "react-icons/fc";

const ManageUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="manage-continer">
      <div className="title">Quản lý người dùng</div>
      <div className="user-content">
        <div>
          <Button variant="success" onClick={handleShow}>
            <FcPlus /> Thêm người dùng
          </Button>
          <ModalCreateUser show={show} handleClose={handleClose} />
        </div>
        <div className="table-user-container">
          <table className="table-user">
            <thead>
              <tr>
                <th>Username</th>
                <th>Mật khẩu</th>
                <th>Email</th>
                <th>Quyền</th>
                <th>Avate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
