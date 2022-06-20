import { LoginForm } from '@shule/web/containers';
import React from 'react';
import authLogo from '../../../assets/auth.png';
import back from '../../../assets/back.png';
function Login() {
  return (
    <div className="flex justify-center items-center px-5 ">
      <img src={back} alt="" className="absolute top-7 left-5 cursor-pointer" />
      <div className="mt-24">
        <div>
          <img src={authLogo} alt="" />
        </div>
        <h2 className="text-green font-bold text-2xl text-center pt-5">
          Welcome Back
        </h2>
        <LoginForm />
        <hr className="mt-5" />

        <div>
          <p className="pt-5">
            Don’t have an account yet?{' '}
            <small className="text-main">Sign Up for Free</small>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
