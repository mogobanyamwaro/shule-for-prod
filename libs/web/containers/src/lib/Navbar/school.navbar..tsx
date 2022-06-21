import { Input } from '@shule/web/components';
import React from 'react';
export interface SchoolNavbarProps {
  Search: string;
  Logo: string;
  cart?: string;
}

export function SchoolNavbar(props: SchoolNavbarProps) {
  const { Search, Logo } = props;
  return (
    <div className="w-full flex justify-end pt-4">
      <div
        className={`flex ${props.cart ? 'w-full' : 'w-8/12'} justify-between`}
      >
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex items-center">
          <div className="w-24">
            <Input bgColor="bg-primary" py="py-1" type="text" />
          </div>
          <img src={Search} className="pl-4 h-6" alt="" />
        </div>
        {props.cart && <img src={props.cart} className="pl-4 h-6" alt="" />}
      </div>
    </div>
  );
}

export default SchoolNavbar;
