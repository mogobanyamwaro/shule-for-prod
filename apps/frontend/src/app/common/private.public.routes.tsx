import { Navigate, Outlet } from 'react-router-dom';

export const getToken = () => {
  return localStorage.getItem('token');
};
export const useAuth = () => {
  const token = getToken();
  if (token) {
    return true;
  }
  return false;
};
export const PrivateRoute: React.FC<{ isAdmin?: boolean }> = (props) => {
  const auth = useAuth();
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={props.isAdmin ? '/admin/login' : '/login'} />
  );
};

// export const PulicRoute: React.FC<{ path: string }> = (props) => {
//   const auth = useAuth();
//   const token = getToken();

//   const role =
//     getRole(token ?? '') === 'EMPLOYER'
//       ? 'EMPLOYER'
//       : getRole(token ?? '') === 'EMPLOYEE'
//       ? 'EMPLOYEE'
//       : '';

//   return auth ? (
//     <Navigate
//       to={
//         role === 'EMPLOYEE'
//           ? '/account/employee'
//           : role === 'EMPLOYER'
//           ? '/account/employer'
//           : ''
//       }
//     />
//   ) : (
//     <Navigate to={props.path} />
//   );
// };
