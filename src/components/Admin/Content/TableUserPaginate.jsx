import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
  const { users, handlePageCount, totalPage, limitUser } = props;
  const [show, setShow] = useState(false);
  const [showModalDel, setShowModalDel] = useState(false);
  const [userData, setUserData] = useState({});
  const [allUsers, setAllUsers] = useState(users);

  const [currentPage, setCurrentPage] = useState(1);
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

  const handlePageClick = (event) => {
    handlePageCount(event.selected + 1);
    setCurrentPage(event.selected + 1);
  };
  return (
    <>
      <table className="table table-success table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">UserID</th>
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
      <ReactPaginate
        breakLabel="..."
        nextLabel="Tiến >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPage}
        previousLabel="< Lùi"
        renderOnZeroPageCount={null}
        className="pagination"
        activeClassName="active"
        pageLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        breakLinkClassName="page-link"
      />
      <ModalDeleteUser
        currentPage={currentPage}
        limitUser={limitUser}
        show={showModalDel}
        handleClose={handleCloseModalDel}
        userData={userData}
        handleRefreshUI={handleRefreshUI}
      />
      <ModalUpdateUser
        currentPage={currentPage}
        limitUser={limitUser}
        show={show}
        handleClose={handleClose}
        userData={userData}
        handleRefreshUI={handleRefreshUI}
      />
    </>
  );
};

export default TableUserPaginate;
