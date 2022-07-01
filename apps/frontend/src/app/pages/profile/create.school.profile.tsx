import React from 'react';
import Search from '../../../assets/search.png';
import back from '../../../assets/back.png';
import Logo from '../../../assets/Logo.svg';
import { Footer } from '@shule/web/components';
import { ProfileForm, SchoolNavbar } from '@shule/web/containers';
import { useNavigate } from 'react-router-dom';

function SchoolProfile() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-5">
        <SchoolNavbar Logo={Logo} Search={Search} />
        <div className="">
          <img
            src={back}
            onClick={() => navigate(-1)}
            alt=""
            className=" cursor-pointer h-8"
          />
          <h1 className="text-main font-semibold pb-5 pt-1">Welcome</h1>
        </div>
        <div>
          <h1 className="text-main text-2xl font-bold text-center pb-5">
            {' '}
            School 1 Academy
          </h1>
          <p className="text-xs italic md:max-w-5xl md:mx-auto">
            Please fill this form to help us market your school. It will take
            less than 15 minutes. We will reach out to you once we have verified
            your details
          </p>
        </div>
      </div>
      <ProfileForm />
      <Footer />
    </div>
  );
}

export default SchoolProfile;
