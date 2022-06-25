import axios from 'axios';

export type IRegisterInput = {
  email: string;
  password: string;
  role: string;
};

export type ILoginInput = {
  email: string;
  password: string;
};
const API_URL = 'http://localhost:5000/api';

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
