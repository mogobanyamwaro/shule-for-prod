import { Button, Input } from '@shule/web/components';
import '../index.css';
/* eslint-disable-next-line */
import {
  ILoginInput,
  login,
  useAppDispatch,
  useAppSelector,
} from '@shule/web/redux';
import { useEffect, useState } from 'react';
import { getRole, getToken, persistToken } from '@shule/web/helpers';
import { UserRoles } from '@shule/backend/enums';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const [error, setError] = useState('');
  const [loginData, setLoginData] = useState<ILoginInput>({
    email: '',
    password: '',
  });
  const tokens = useAppSelector((state: any) => state.auth._id);
  const loading = useAppSelector((state: any) => state.auth.loading);
  const serverError = useAppSelector((state: any) => state.auth.error);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (serverError) {
      setError(serverError);
    }
  }, [serverError]);
  useEffect(() => {
    if (tokens && !error) {
      persistToken(tokens);
      const token = getToken();

      //@ts-ignore
      const role = getRole(token);
      console.log(role);
      if (role === UserRoles.PARENT) {
        navigate('/view-schools');
      } else if (role === UserRoles.INSTITUTION) {
        navigate('/create-school-profile');
      } else if (role === UserRoles.ADMIN) {
        navigate('/admin-home');
      } else {
        navigate('/');
      }
    }
  }, [tokens, error, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(loginData);
      await dispatch(login(loginData));
    } catch (error: any) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <form
      className="max-w-lg flex flex-col items-center"
      onSubmit={handleSubmit}
    >
      <div className="pb-10 pt-5">
        <p className="text-green text-xs font-bold text-center pb-3">Email</p>
        <Input
          name="email"
          OnChange={handleChange}
          value={loginData.email}
          bgColor="bg-primary"
          py="py-2"
        />
      </div>
      <div className="pb-10">
        <p className="text-green text-xs font-bold text-center pb-3">
          Password
        </p>
        <Input
          name="password"
          OnChange={handleChange}
          value={loginData.password}
          bgColor="bg-primary"
          py="py-2"
        />
      </div>
      <Button
        bgColor="bg-main"
        bgColorHover="bg-main"
        px="px-16"
        py="py-2"
        textColor="text-white"
      >
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
