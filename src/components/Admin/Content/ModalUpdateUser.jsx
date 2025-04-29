import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { toast } from "react-toastify";
import validation from "../../../utils/validation";
import { postCreateNewUser } from "../../../service/userService";
import _ from "lodash";
const ModalUpdateUser = (props) => {
  //validation
  const { validateEmail, validateUsername, validatePassword } = validation;

  //props
  const { show, handleClose, fetchUsers, userData } = props;

  //state
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  //fc
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };
  // Khi modal mở, cập nhật state với thông tin từ userData
  useEffect(() => {
    if (!_.isEmpty(userData)) {
      setUserName(userData.username);
      setEmail(userData.email);
      setRole(userData.role);
      setPreviewImage(
        userData.image ? `data:image;base64,${userData.image}` : null
      );
      setImage(userData.image);
      console.log("userData", userData);
    }
  }, [userData]);
  const resetForm = () => {
    setUserName("");
    setPassword("");
    setEmail("");
    setRole("USER");
    setPreviewImage(null);
    setImage(null);
  };

  const handleSaveUser = async () => {
    if (!validateUsername(userName)) {
      toast.error("Tên đăng nhập phải có hơn 5 ký tự!");
      return;
    }
    if (!validatePassword(password)) {
      toast.error("Mật khẩu phải hơn 5 ký tự!");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Invalid email!");
      return;
    }

    //call api
    // let data = await postCreateNewUser(email, password, userName, image, role);
    // if (data && data.EC === 0) {
    //   toast.success(data.EM);
    //   handleClose();
    //   await fetchUsers();
    // } else {
    //   toast.error(data.EM);
    // }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Sửa người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridUserName">
                <Form.Label>UserName</Form.Label>
                <Form.Control
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Quyền</Form.Label>
                <Form.Select
                  defaultValue={userData.role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridImage">
                <Form.Label>Ảnh đại diện</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} />
              </Form.Group>
            </Row>
            {previewImage && (
              <div className="preview-image">
                <img className="preview-avt" src={previewImage} alt="Preview" />
              </div>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="success" onClick={handleSaveUser}>
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateUser;
