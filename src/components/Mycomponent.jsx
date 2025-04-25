import { User } from "lucide-react";
import React, { useState } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

const Mycomponent = () => {
  const object = {
    name: "Xuân hoag",
    age: 20,
    address: {
      city: "Hà Nội",
      district: "Đống Đa",
    },
  };
  const arraya = [
    { id: 1, name: "Nguyễn Văn A", age: 20, address: "Hà Nội" },
    { id: 2, name: "Nguyễn Văn B", age: 12, address: "Đà Nẵng" },
    { id: 3, name: "Nguyễn Văn C", age: 30, address: "Hồ Chí Minh" },
  ];
  const [listuser, setListsUser] = useState(arraya);

  const handleAdduser = (objUser) => {
    const newListUser = [...listuser];
    newListUser.unshift(objUser);
    setListsUser(newListUser);
  };
  const handleDeleteUser = (id) => {
    const newListUser = listuser.filter((user) => user.id !== id);
    setListsUser(newListUser);
  };
  return (
    <>
      <UserInfor handleAdduser={handleAdduser} />
      <DisplayInfor
        object={object}
        listUser={listuser}
        handleDeleteUser={handleDeleteUser}
      />
    </>
  );
};

export default Mycomponent;
