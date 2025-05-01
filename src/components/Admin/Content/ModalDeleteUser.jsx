import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  deleteUser,
  getAllUsers,
  getUserWithPage,
} from "../../../service/userService";
const ModalDeleteUser = (props) => {
  const {
    show,
    handleClose,
    userData,
    handleRefreshUI,
    currentPage,
    limitUser,
  } = props;
  const handleDeleteUser = async () => {
    let data = await deleteUser(userData);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      fetchUsers();
      handleClose();
    } else {
      toast.error(data.EM);
    }
  };
  const fetchUsers = async () => {
    let data = await getUserWithPage(currentPage, limitUser);
    if (data && data.EC === 0) {
      handleRefreshUI(data.DT.users);
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa id [{userData}]</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="success" onClick={handleDeleteUser}>
            {" "}
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
