import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ModalUpdateUser from "./ModalUpdateUser";

const TableUser = (props) => {
  const { users } = props;
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({});
  const handleClose = () => setShow(false);
  const handleClickUpdateUser = (user) => {
    // Handle update user logic here
    setShow(true);

    setUserData(user);

    // console.log("Update user clicked", { id, username, email, role, image });
  };
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
          {users.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                  {item.image ? (
                    <img
                      src={`data:image;base64,${item.image}`} // Nếu không biết MIME, bạn có thể giả định kiểu `image`
                      alt="User Avatar"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <span>Không có ảnh</span> // Thông báo nếu không có ảnh
                  )}
                </td>

                <td>
                  <Button variant="outline-info">View</Button>
                  <Button
                    variant="outline-success"
                    className="mx-3"
                    onClick={() => handleClickUpdateUser(item)}
                  >
                    Update
                  </Button>
                  <Button variant="outline-danger">Delete</Button>
                </td>
              </tr>
            );
          })}
          {users && users.length === 0 && (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>
                Not found data
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ModalUpdateUser
        show={show}
        handleClose={handleClose}
        userData={userData}
      />
    </>
  );
};

export default TableUser;
