import { getAuthFileConfig } from '@shule/web/helpers';
import axios from 'axios';
const API_URL = 'https://goshule.herokuapp.com/api';

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
