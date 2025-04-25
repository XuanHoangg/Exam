import React, { useState } from "react";

const UserInfor = (props) => {
  const ob = {
    name: "Nguyễn Văn A",
    age: 20,
    address: {
      city: "Hà Nội",
      district: "Đống Đa",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "age") {
      setAge(value);
    }
    console.log(value);
  };
  const [name, setName] = useState(ob.name);
  const [age, setAge] = useState(ob.age);

  const handleOnsubmit = (e) => {
    e.preventDefault();
    props.handleAdduser({
      id: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
      name,
      age: age,
    });
  };
  return (
    <>
      <h2>
        Hello <span>{name}</span>
      </h2>
      <form onSubmit={(e) => handleOnsubmit(e)}>
        <input type="text" name="name" onChange={(e) => handleChange(e)} />
        <input type="text" name="age" onChange={(e) => handleChange(e)} />
        <button>submit</button>
      </form>
    </>
  );
};

export default UserInfor;
