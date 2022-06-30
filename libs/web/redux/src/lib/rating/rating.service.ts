import { RatingEnumType } from '@shule/backend/enums';
import { getAuthConfig } from '@shule/web/helpers';
import axios from 'axios';
const API_URL = 'https://goshule.herokuapp.com/api';
export interface RatingInterface {
  ratingValue: number;
  comment: string;
  ratingType: RatingEnumType;
  user: {
    id: string;
    username: string;
    profile: {
      firstName: string;
      lastName: string;
      avatar: string;
    };
  };
}

export const createRating = async (input: RatingInterface) => {
  const config = getAuthConfig();
  const res = await axios.post(`${API_URL}/ratings/create`, input, config);
  return res.data;
};

export const getInstitutionRatings = async (institutionId: string) => {
  const config = getAuthConfig();
  const res = await axios.get(
    `${API_URL}/ratings/institution/${institutionId}`,
    config
  );
  return res.data;
};

const ratingService = {
  createRating,
  getInstitutionRatings,
};

export default ratingService;
