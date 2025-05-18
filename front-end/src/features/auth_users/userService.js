import axios from "axios";

export const registerUser = async (userData) => {
  const response = await axios.post(
    "http://localhost:5174/api/users/register-user",
    userData
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
