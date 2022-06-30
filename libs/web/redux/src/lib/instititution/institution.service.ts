import { InstitutionEnumStatus } from '@shule/backend/enums';
import { getAuthConfig } from '@shule/web/helpers';
import axios from 'axios';
const API_URL = 'https://goshule.herokuapp.com/api';
export interface InstitutionInterface {
  about: string;
  name?: string;
  status: InstitutionEnumStatus;
  educationType: string;
  educationLevel: string;
  performanceStatistics: string;
  licenseAndCertification: string;
  location: string;
  isFeatured?: boolean;
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

export const toglleInstitutionFeatured = async (id: string) => {
  const config = getAuthConfig();
  const res = await axios.put(
    `${API_URL}/institutions/toggle-featured/${id}`,
    {},
    config
  );
  return res.data;
};

const institutionService = {
  createInstitutionProfile,
  getAllInstitutions,
  getOneInstitution,
  toglleInstitutionFeatured,
};

export default institutionService;
