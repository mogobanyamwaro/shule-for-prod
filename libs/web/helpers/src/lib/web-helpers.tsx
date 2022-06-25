import jwtDecode, { JwtPayload } from 'jwt-decode';
export const parserErrorMessage = (error: any): string => {
  const isArray = Array.isArray(error);
  if (isArray) {
    return error[0];
  }
  return error;
};

export default parserErrorMessage;

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

export const getToken = () => {
  return localStorage.getItem('token');
};
export interface CustomJwtPayload extends JwtPayload {
  role: string;
  _id: string;
}
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
