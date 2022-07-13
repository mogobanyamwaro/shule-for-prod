import { Footer } from '@shule/web/components';
import { Navbar } from '@shule/web/containers';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/Logo.png';

export function AdminHome() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar Logo={Logo} />
      <div className="pt-24  ">
        <div className="text-main  font-glory font-bold px-5 pb-7">
          <h1 className="text-sm py-4">Welcome</h1>
          <h1 className="ml-10">ADMIN</h1>
        </div>
        <div className="flex justify-around px-5 flex-wrap bg-AdminHome h-screen bg-cover md:items-center ">
          <div
            onClick={() => navigate('/admin-create-blog')}
            className="bg-primary cursor-pointer md:h-72 h-44 w-72  mt-7 hover:bg-primaryDark"
          >
            <p className="font-bold text-xl pt-16 px-10 md:pt-24 md:pl-10">
              Create and Edit blogs
            </p>
          </div>
          <div
            onClick={() => navigate('/create-product')}
            className="bg-primary cursor-pointer md:h-72 h-44 w-72 mt-7 hover:bg-primaryDark"
          >
            <p className="font-bold text-xl pt-16 px-10 md:pt-24 md:pl-10">
              Add or Edit products
            </p>
          </div>
          <div
            onClick={() => navigate('/admin-edit-schools')}
            className="bg-primary cursor-pointer md:h-72 h-44 w-72 mt-7 hover:bg-primaryDark"
          >
            <h1 className="font-bold pt-16 text-xl px-10 md:pt-24 md:pl-10">
              Add or Edit Schools
            </h1>
          </div>
        </div>
        <Footer logo={Logo} />
      </div>
    </div>
  );
}

export default AdminHome;
