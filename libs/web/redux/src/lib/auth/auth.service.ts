import axios from 'axios';
//@ts-ignore
const API_URL = process.env.REACT_APP_NX_BACKEND_URL;
export type IRegisterInput = {
  email: string;
  password: string;
  role: string;
};

export type ILoginInput = {
  email: string;
  password: string;
};

const register = async (input: IRegisterInput) => {
  const response = await axios.post(`${API_URL}/auth/register`, input);
  return response.data;
};

const login = async (input: ILoginInput) => {
  const response = await axios.post(`${API_URL}/auth/login`, input);
  return response.data.result;
};

export const AuthService = {
  register,
  login,
};
