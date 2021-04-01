import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3005/",
});

export const getUsers = async () => {
  const response = await instance.get("/users");
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await instance.put(`/users/${id}`, userData);
  return response.data;
};

export const createNewUser = async (user) => {
  const response = await instance.post("/users/", user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await instance.delete(`/users/${id}`);
  return response.data;
};

export default instance;
