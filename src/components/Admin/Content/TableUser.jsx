import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ModalUpdateUser from "./ModalUpdateUser";
import { getAllUsers } from "../../../service/userService";
import ModalDeleteUser from "./ModalDeleteUser";

const TableUser = (props) => {
  const { users } = props;
  const [show, setShow] = useState(false);
  const [showModalDel, setShowModalDel] = useState(false);
  const [userData, setUserData] = useState({});
  const [allUsers, setAllUsers] = useState(users);
  const handleClose = () => setShow(false);
  const handleCloseModalDel = () => setShowModalDel(false);

  const handleClickUpdateUser = (user) => {
    setShow(true);

    setUserData(user);
  };

  const handleClickDeleteUser = (user) => {
    setShowModalDel(true);

    setUserData(user);
  };
  const handleRefreshUI = (updatedUsers) => {
    setAllUsers(updatedUsers);
  };
  useEffect(() => {
    setAllUsers(users);
  }, [users]);
  return (
    <>
      <table className="table table-success table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                  {item.image ? (
                    <img
                      src={`data:image;base64,${item.image}`}
                      alt="User Avatar"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <span>Không có ảnh</span>
                  )}
                </td>

                <td>
                  <Button
                    variant="outline-success"
                    className="mx-3"
                    onClick={() => handleClickUpdateUser(item)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => handleClickDeleteUser(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
          {allUsers && allUsers.length === 0 && (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>
                Not found data
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ModalDeleteUser
        show={showModalDel}
        handleClose={handleCloseModalDel}
        userData={userData}
        handleRefreshUI={handleRefreshUI}
      />
      <ModalUpdateUser
        show={show}
        handleClose={handleClose}
        userData={userData}
        handleRefreshUI={handleRefreshUI}
      />
    </>
  );
};

export default TableUser;
