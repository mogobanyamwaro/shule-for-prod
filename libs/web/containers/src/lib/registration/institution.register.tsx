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

export function InstitutionRegistration(props: RegisterProps) {
  const navigate = useNavigate();
  const { setError } = props;
  const dispatch = useAppDispatch();
  const [institutionData, setInstitutionData] = useState<CreateUser>({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    role: UserRoles.INSTITUTION,
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
    setInstitutionData({ ...institutionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(institutionData);
    if (institutionData.password !== institutionData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    delete institutionData.confirmPassword;
    dispatch(register(institutionData));
  };
  return (
    <form
      className="max-w-lg flex flex-col items-center"
      onSubmit={handleSubmit}
    >
      <div className="pb-0 pt-5">
        <p className="text-green text-xs font-bold text-center pb-3">
          Institution Email
        </p>
        <Input
          name="email"
          value={institutionData.email}
          OnChange={handleChange}
          bgColor="bg-primary"
          py="py-2"
          type="email"
        />
      </div>
      <div className="pb-0 pt-5">
        <p className="text-green text-xs font-bold text-center pb-3">
          Institution Email
        </p>
        <Input
          name="username"
          value={institutionData.username}
          OnChange={handleChange}
          bgColor="bg-primary"
          py="py-2"
          type="text"
        />
      </div>

      <div className="pb-5">
        <p className="text-green text-xs font-bold text-center pb-3">
          create password
        </p>
        <Input
          name="password"
          value={institutionData.password}
          OnChange={handleChange}
          bgColor="bg-primary"
          py="py-2"
          type="password"
        />
      </div>
      <div className="pb-10">
        <p className="text-green text-xs font-bold text-center pb-3">
          confirm password
        </p>
        <Input
          name="confirmPassword"
          value={institutionData.confirmPassword}
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

export default InstitutionRegistration;
