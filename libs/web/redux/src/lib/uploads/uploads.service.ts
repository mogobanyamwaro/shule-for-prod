import { getAuthFileConfig } from '@shule/web/helpers';
import axios from 'axios';
//@ts-ignore
const API_URL = process.env.REACT_APP_NX_BACKEND_URL;

const uploadFile = async (images: any) => {
  const config = getAuthFileConfig();
  const response = await axios.post(`${API_URL}/uploads/file`, images, config);
  if (response) {
    return response.data;
  }
};

export const uploadsService = {
  uploadFile,
};

// export default uploadsService;
