import { Input } from '@shule/web/components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
export interface SchoolNavbarProps {
  Search: string;
  Logo: string;
  cart?: string;
}

export function SchoolNavbar(props: SchoolNavbarProps) {
  const { Search, Logo } = props;
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-end pt-4">
      <div
        className={`flex ${props.cart ? 'w-full' : 'w-8/12'} justify-between`}
      >
        <div>
          <img
            src={Logo}
            className="cursor-pointer h-24 w-24"
            onClick={() => navigate('/')}
            alt=""
          />
        </div>
        <div className="flex items-center">
          <div className="w-24">
            <Input bgColor="bg-primary" py="py-1" type="text" />
          </div>
          <img src={Search} className="pl-4 h-6" alt="" />
        </div>
        {props.cart && (
          <div className="relative cursor-pointer">
            <img
              src={props.cart}
              className="pl-4 h-6"
              onClick={() => navigate('/cart')}
              alt=""
            />
            <p className=" text-green font-bold text-xl absolute -top-3 -right-3">
              0
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SchoolNavbar;
