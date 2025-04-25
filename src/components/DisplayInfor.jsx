import React, { useState, useEffect } from "react";
import "../style/User/DisplayInfor.scss";
import logo from "./../logo.svg";

const DisplayInfor = (props) => {
  const { name, age } = props.object;
  const [hidden, setHidden] = useState(true);
  const handleHidden = (e) => {
    setHidden(!hidden);
    e.target.innerText = hidden ? "Hiện" : "Ẩn";
    e.target.style.backgroundColor = hidden ? "red" : "green";
  };
  const deleteUser = (id) => {
    props.handleDeleteUser(id);
  };
  useEffect(() => {
    console.log("Component mounted");
  }, []); // [] để chạy 1 lần khi component mount

  return (
    <div className="display-infor">
      <img src={logo} alt="" />
      <h2>Display Information</h2>
      <p>This component is responsible for displaying user information.</p>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>City: New York</li>
      </ul>
      <button onClick={(e) => handleHidden(e)}>Ẩn</button>
      {hidden &&
        props.listUser.map((user, index) => (
          <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
            <h3>User {index + 1}</h3>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Address: {user.address}</p>
            <button onClick={() => deleteUser(user.id)}>Xóa</button>
          </div>
        ))}
    </div>
  );
};

export default DisplayInfor;
