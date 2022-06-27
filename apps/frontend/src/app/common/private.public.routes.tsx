import { UserRoles } from '@shule/backend/enums';
import { getRole, getToken, useAuth } from '@shule/web/helpers';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute: React.FC<{ isAdmin?: boolean }> = (props) => {
  const auth = useAuth();
  const token = getToken();
  //@ts-ignore
  const role = getRole(token);
  return auth ? <Outlet /> : <Navigate to={'/login'} />;
};

export const PrivateAdminRoute: React.FC<{ isAdmin?: boolean }> = (props) => {
  const auth = useAuth();
  const token = getToken();
  //@ts-ignore
  const role = getRole(token);
  return auth && role === UserRoles.ADMIN ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} />
  );
};

export const PrivateParentRoute: React.FC<{ isAdmin?: boolean }> = (props) => {
  const auth = useAuth();
  const token = getToken();
  //@ts-ignore
  const role = getRole(token);
  return auth && role === UserRoles.PARENT ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} />
  );
};

export const PrivateInstitutionRoute: React.FC<{ isAdmin?: boolean }> = (
  props
) => {
  const auth = useAuth();
  const token = getToken();
  //@ts-ignore
  const role = getRole(token);
  return auth && role === UserRoles.INSTITUTION ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} />
  );
};
