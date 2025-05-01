import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ModalCreateUser from "./ModalCreateUser";
import "../../../style/Admin/ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { getAllUsers, getUserWithPage } from "../../../service/userService";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = () => {
  const [show, setShow] = useState(false);
  const [limitUser, setLimitUser] = useState(7);
  const [totalPage, setTotalPage] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [pageCount, setPageCount] = useState(1);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetchUsers();
    fetchUsersWithPage(pageCount);
  }, [pageCount, limitUser]);
  const fetchUsers = async () => {
    let data = await getAllUsers();
    if (data && data.EC === 0) {
      setUsers(data.DT);
    }
  };
  const fetchUsersWithPage = async (page) => {
    let data = await getUserWithPage(page, limitUser);
    if (data && data.EC === 0) {
      setTotalPage(data.DT.totalPages);
      setUsers(data.DT.users);
    }
  };
  const handlePageCount = (pageCount) => {
    setPageCount(pageCount);
  };
  const handleTotalUserOnPage = () => (e) => {
    setLimitUser(e.target.value);
    console.log("check limit user", e.target.value);
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
            fetchUsersWithPage={fetchUsersWithPage}
          />
        </div>
        <div className="total-user-container">
          <span className="totalUser">Xem số lượng user mỗi trang</span>
          <input
            className="input-user"
            defaultValue={limitUser}
            type="number"
            onChange={handleTotalUserOnPage()}
          ></input>
        </div>
        <div className="table-user-container mt-3">
          <TableUserPaginate
            users={users}
            handlePageCount={handlePageCount}
            totalPage={totalPage}
            limitUser={limitUser}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
