import jwtDecode, { JwtPayload } from 'jwt-decode';

//parse Error
export const parserErrorMessage = (error: any): string => {
  const isArray = Array.isArray(error);
  if (isArray) {
    return error[0];
  }
  return error;
};

export default parserErrorMessage;

//Persistent storage

export const persistToken = (tokens: { accessToken: string } | '') => {
  let token = '';
  if (tokens) {
    token = tokens.accessToken;
  }

  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
};

//Get token from local storage

export const getToken = () => {
  return localStorage.getItem('token');
};
export interface CustomJwtPayload extends JwtPayload {
  role: string;
  _id: string;
}

//Get user from token

export const getRole = (token: string): string | null => {
  if (token) {
    const decode = jwtDecode<CustomJwtPayload>(token);
    if (decode) {
      return decode.role;
    } else {
      return null;
    }
  }
  return null;
};

//Get auth config from tok

export const getAuthConfig = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
  };
};

export const getAuthFileConfig = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
      Accept: '*/*',
    },
  };
};

export const getFileUploadConfig = () => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
      Accept: '*/*',
    },
  };
};

export const useAuth = () => {
  const token = getToken();
  if (token) {
    return true;
  }
  return false;
};

export function useToken() {
  const token = localStorage.getItem('token');

  return token ? true : false;
}
