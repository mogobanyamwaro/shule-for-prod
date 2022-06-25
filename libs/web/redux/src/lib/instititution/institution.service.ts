import { InstitutionEnumStatus } from '@shule/backend/enums';
import { getAuthConfig } from '@shule/web/helpers';
import axios from 'axios';
const API_URL = 'http://localhost:5000/api';
export interface InstitutionInterface {
  about: string;
  status: InstitutionEnumStatus;
  educationType: string;
  educationLevel: string;
  performanceStatistics: string;
  licenseAndCertification: string;
  location: string;
  phone: string;
  email: string;
  facebookLink: string;
  instagramLink: string;
  schoolPhotos: string[];
}

export const createInstitutionProfile = async (input: InstitutionInterface) => {
  const config = getAuthConfig();
  const res = await axios.post(`${API_URL}/institutions/create`, input, config);
  return res.data;
};

export const getAllInstitutions = async () => {
  const config = getAuthConfig();
  const res = await axios.get(`${API_URL}/institutions/all`, config);
  return res.data;
};

export const getOneInstitution = async (id: string) => {
  const config = getAuthConfig();
  const res = await axios.get(`${API_URL}/institutions/${id}`, config);
  return res.data;
};

const institutionService = {
  createInstitutionProfile,
  getAllInstitutions,
  getOneInstitution,
};

export default institutionService;
