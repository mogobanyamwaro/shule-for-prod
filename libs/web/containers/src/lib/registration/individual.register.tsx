import { Button, Input } from '@shule/web/components';
import { useAppSelector, useAppDispatch, register } from '@shule/web/redux';

import { UserRoles } from '@shule/backend/enums';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* eslint-disable-next-line */

interface CreateUser {
  confirmPassword?: string;
  email: string;
  password: string;
  role: UserRoles;
  username: string;
}

interface RegisterProps {
  setError: (error: string) => void;
}

export function IndividualRegistration(props: RegisterProps) {
  const navigate = useNavigate();
  const { setError } = props;
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<CreateUser>({
    email: '',
    password: '',
    confirmPassword: '',
    role: UserRoles.PARENT,
    username: '',
  });
  const serverError = useAppSelector((state) => state.auth.error);
  const authSuccess = useAppSelector((state) => state.auth.sucess);

  useEffect(() => {
    if (serverError) {
      setError(serverError);
    }
  }, [serverError, setError]);

  useEffect(() => {
    if (authSuccess) {
      navigate('/login');
    }
  }, [authSuccess, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
    if (userData.password !== userData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    delete userData.confirmPassword;
    dispatch(register(userData));
  };
  return (
    <form
      className="max-w-lg flex flex-col items-center"
      onSubmit={handleSubmit}
    >
      <div className=" pt-5">
        <p className="text-green text-xs font-bold text-center pb-3">Email</p>
        <Input
          name="email"
          OnChange={handleChange}
          value={userData.email}
          bgColor="bg-primary"
          py="py-2"
          type="email"
        />
      </div>
      <div className=" pt-5">
        <p className="text-green text-xs font-bold text-center pb-3">Email</p>
        <Input
          name="username"
          OnChange={handleChange}
          value={userData.username}
          bgColor="bg-primary"
          py="py-2"
          type="text"
        />
      </div>
      <div className="pb-10">
        <p className="text-green text-xs font-bold text-center pb-3">
          create password
        </p>
        <Input
          name="password"
          OnChange={handleChange}
          value={userData.password}
          bgColor="bg-primary"
          py="py-2"
          type="password"
        />
      </div>
      <div className="pb-5">
        <p className="text-green text-xs font-bold text-center pb-3">
          confirm password
        </p>
        <Input
          name="confirmPassword"
          value={userData.confirmPassword}
          OnChange={handleChange}
          bgColor="bg-primary"
          py="py-2"
          type="password"
        />
      </div>
      <Button
        bgColor="bg-main"
        bgColorHover="bg-main"
        px="px-16"
        py="py-2"
        textColor="text-white"
      >
        Register
      </Button>
    </form>
  );
}

export default IndividualRegistration;
