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
export { postCreateNewUser, getAllUsers };
