import axios from "../utils/axiosCustom";

const postCreateNewUser = async (email, password, userName, image, role) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", userName);
  data.append("userImage", image);
  data.append("role", role);

  return await axios.post("api/v1/participant", data);
};

const getAllUsers = async () => {
  return await axios.get("api/v1/participant/all");
};
const putUpdateUser = async (id, userName, image, role) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", userName);
  data.append("userImage", image);
  data.append("role", role);

  return await axios.put("api/v1/participant", data);
};
const deleteUser = async (id) => {
  return await axios.delete("api/v1/participant", { data: { id } });
};

const getUserWithPage = async (page, limit) => {
  return await axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};
export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUserWithPage,
};
