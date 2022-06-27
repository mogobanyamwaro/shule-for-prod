import { RatingEnumType } from '@shule/backend/enums';
import { getAuthConfig } from '@shule/web/helpers';
import axios from 'axios';
const API_URL = 'https://goshule.herokuapp.com/api';
export interface BlogInterface {
  title: string;
  content: string;
  image: string;
}

export const createBlog = async (blog: BlogInterface) => {
  const config = getAuthConfig();
  const response = await axios.post(`${API_URL}/blog/create`, blog, config);
  return response.data;
};

export const getBlogs = async () => {
  const config = getAuthConfig();
  const response = await axios.get(`${API_URL}/blog/all`, config);
  return response.data;
};

export const getBlog = async (id: string) => {
  const config = getAuthConfig();
  const response = await axios.get(`${API_URL}/blog/get/${id}`, config);
  return response.data;
};

const blogService = {
  createBlog,
  getBlogs,
  getBlog,
};

export default blogService;
